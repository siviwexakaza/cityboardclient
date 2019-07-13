import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ChatService} from '../services/chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: Object;
  city='';

  constructor(private chatService:ChatService , private router:Router) {}

  ngOnInit(){
    this.chatService.getProvinces().subscribe(data =>{
      this.posts = data;
      
    });
  }

  showCities(objProvince){

    this.chatService.currentProvince=objProvince.name;
    this.router.navigate(['/cities']);

  }

 // searchByCity(){
  //  this.chatService.getCityPosts(this.city).subscribe(data=>{
  //    this.posts=data;
  //  });

  //}

}
