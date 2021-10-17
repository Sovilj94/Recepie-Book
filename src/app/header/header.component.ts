import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private storage: DataStorageService, private authService: AuthService) { }

  @Output() emitter = new EventEmitter<string>();
  userSub: Subscription;
  isAuthenticated = false;



  ngOnInit(): void {
    this.userSub =  this.authService.user.subscribe(result => {
      this.isAuthenticated = !result ? false : true;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSub.unsubscribe();
  }

  onSelect(str: string){

    this.emitter.emit(str);
  }

  onSaveData(){
    this.storage.saveRecepies();
  }

  onGetData(){
    this.storage.getRecepies().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }



}
