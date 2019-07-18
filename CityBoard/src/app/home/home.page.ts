import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ChatService} from '../services/chat.service';
import {Router} from '@angular/router';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: Object;
  city='';
  username='';

  constructor(private chatService:ChatService , private router:Router , private store : StorageService) {}

  ngOnInit(){
    this.chatService.getProvinces().subscribe(data =>{
      this.posts = data;
      this.store.getUsername().then(usern=>{
        console.log(usern);
        if(usern===null){
          this.router.navigate(['/login']);
        }else{
          this.username=usern[0];
          this.chatService.currentUsername=this.username;
        }
      }).catch(err=>console.log(err));
      
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
