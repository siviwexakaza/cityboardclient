import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http : HttpClient) { }
  url = 'http://polar-retreat-28833.herokuapp.com/api/chats/';

  getPosts() : Observable<any>{
    return this.http.get(this.url);
  }

  getCityPosts(city : String) {
    return this.http.get(this.url+`/${city}`);
  }

  postMessage(city : String, content: String) {
    return this.http.post(this.url,{city:city,content:content});
  }
}
