import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: Object;
  city='';

  constructor(private chatService:ChatService) {}

  ngOnInit(){
    this.chatService.getPosts().subscribe(data =>{
      this.posts = data;
      
    });
  }

  searchByCity(){
    this.chatService.getCityPosts(this.city).subscribe(data=>{
      this.posts=data;
    });

  }

}
