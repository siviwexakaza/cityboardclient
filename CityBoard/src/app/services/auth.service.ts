import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../services/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient , private store : StorageService) { }

   //url = 'http://polar-retreat-28833.herokuapp.com/api/chats/';

   url='http://polar-retreat-28833.herokuapp.com/';

   username='';
   password='';

   login() : Observable<any>{
     return this.http.post(this.url+'api/users/login',{username:this.username,password:this.password});
   }

   register() : Observable<any>{
    return this.http.post(this.url+'api/users/register',{username:this.username,password:this.password});
  }
}
