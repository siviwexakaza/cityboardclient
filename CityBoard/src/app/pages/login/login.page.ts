import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route:Router, private auth:AuthService, private store:StorageService) { }

  username='';
  password='';
  feedback='';

  ngOnInit() {
  }

  login(){
    this.auth.username=this.username;
    this.auth.password=this.password;
    this.auth.login().subscribe((data)=>{
      
      if(data.length > 1){

        this.feedback=data[0].Error;

      }else{
        this.store.addUsername(this.username).then(d=>{
          this.route.navigate(['/home']);

        });
        

      }
      
      
    });
  }

  register(){
    
    this.route.navigate(['/register']);
  }

}
