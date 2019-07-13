import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  chats:Object;
  city='';
  content='';
  result:Object;

  constructor(private chat:ChatService) { }

  ngOnInit() {
    this.getChats();
  }

  getChats(){

    this.city=this.chat.currentCity;
    this.chat.getCityPosts().subscribe(data=>{
      this.chats=data;
    });

  }

  sendMessage(){
    this.chat.postMessage(this.content).subscribe(data=>{

      this.result=data;
      this.content='';
      this.getChats();

    });
  }

}
