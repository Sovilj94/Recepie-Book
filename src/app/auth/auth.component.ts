import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Component({
    selector:'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  /**
   *
   */
  constructor(private authService: AuthService, private router: Router,private activatedRout: ActivatedRoute) {

  }

  onSwithchMode(){
    this.isLoginMode = !this.isLoginMode;
  }


  onSubmit(authForm: NgForm){
    const email = authForm.value.email;
    const password = authForm.value.password;

    this.isLoading = true;
   if(this.isLoginMode){
      this.authService.logIn(email,password).subscribe(result => {
          this.isLoading = false;
          this.router.navigate(['/recepies']);
        console.log(result)
      },errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
    })
   }else{

        this.authService.signUp(email, password).subscribe(result => {
          console.log(result);
          this.isLoading = false;
          this.router.navigate(['/recepies']);
        }, errorMessage => {

          console.log()

         this.error = errorMessage;
          this.isLoading = false;
        });

   }



    authForm.reset();

  }

  resetError(){
    this.error = null;
  }
}
