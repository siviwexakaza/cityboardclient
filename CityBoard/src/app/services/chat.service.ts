import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http : HttpClient) { }
  //url = 'http://polar-retreat-28833.herokuapp.com/api/chats/';

  url='http://polar-retreat-28833.herokuapp.com/';
  currentProvince='';
  currentCity='';
  currentUsername='';

  getCities(){
    return this.http.get(this.url+`api/cities/${this.currentProvince}`);
  }

  getProvinces(){
    return this.http.get(this.url+'api/provinces');
  }



  getPosts() : Observable<any>{
    return this.http.get(this.url+'api/chats');
  }

  getCityPosts() {
    return this.http.get(this.url+`api/chats/${this.currentCity}`);
  }

  postMessage(content: String) {
    return this.http.post(this.url+'api/chats',{city:this.currentCity,content:content,username:this.currentUsername});
  }
}
