import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";


export interface AuthResponseInterface {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
  registerd?: boolean;
}

@Injectable({providedIn:'root'})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  private tokenExparationTimer: any;


  constructor(private http: HttpClient, private router: Router) {

  }

  logIn(email: string, password: string){
   return this.http.post<AuthResponseInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCN0ojGw6JQhUbk5IjH6mTKpnorvYt8Gg4',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(errorRes => {

      let errorMessage = 'Unknown error ocured!'
      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }else{
        switch(errorRes.error.error.message){
          case 'EMAIL_NOT_FOUND':
              errorMessage = 'Email not found!';
              break;
          case 'INVALID_PASSWORD':
            errorMessage = 'Invalid Password!';
            console.log(errorMessage)
              break;
          case 'USER_DISABLED':
              errorMessage = 'User disabled!'
              break;
        }

        return throwError(errorMessage);

      }

    }), tap(result => {
      const exparationDate = new Date(new Date().getTime() + +result.expiresIn * 1000)
      const user = new User(result.email,result.localId, result.idToken, exparationDate);

      this.user.next(user);

      console.log(exparationDate);

      this.autoLogout(result.expiresIn * 1000);

      localStorage.setItem('userData',JSON.stringify(user));
  }));

  }


  signUp(email: string, password: string){

   return this.http.post<AuthResponseInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCN0ojGw6JQhUbk5IjH6mTKpnorvYt8Gg4',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(errorRes => {

      let errorMessage = 'Unknown error ocured!'
      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }else{
        switch(errorRes.error.error.message){
          case 'EMAIL_EXISTS':
              errorMessage = 'Email alredy exists!';
          case 'OPERATION_NOT_ALLOWED':
              errorMessage = 'Operation is not allowed!';
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              errorMessage = 'To many attempts try later!'
        }

        return throwError(errorMessage);
      }


    }), tap(result => {
        const exparationDate = new Date(new Date().getTime() + +result.expiresIn * 1000)



        const user = new User(result.email,result.localId, result.idToken, exparationDate);

        this.user.next(user);
    }));

  }

  autoLogin(){
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExparationDate: string

    } = JSON.parse(localStorage.getItem('userData'));



    if(!userData){
      return;
    }

    const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExparationDate));
    if(loadedUser.token){
      this.user.next(loadedUser);

      const exparationDuration =  new Date(userData._tokenExparationDate).getTime() - new Date().getTime();

      this.autoLogout(exparationDuration);
    }



  }

  autoLogout(exparationDuration: number){

    console.log(exparationDuration);
    this.tokenExparationTimer = setTimeout(()=>{

      this.logout();

    },exparationDuration);
  }

  logout(){
      this.user.next(null);
      this.router.navigate(['/auth']);
      localStorage.removeItem('userData');

      if(this.tokenExparationTimer){
        clearTimeout(this.tokenExparationTimer);
      }

      this.tokenExparationTimer = null;
  }

}
