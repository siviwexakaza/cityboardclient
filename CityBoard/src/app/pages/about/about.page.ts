import { Component, OnInit, ViewChild } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

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
  username='';
  @ViewChild('contents') contents: any;

  constructor(private chat:ChatService) { }



  ionViewDidEnter(){
    console.log('trigger');
    //document.querySelector('ion-content').scrollToBottom(500);
    this.contents.scrollToBottom(50);

  }

  ngOnInit() {
    this.getChats();
    this.username=this.chat.currentUsername;
    console.log(this.username);
    
    
    
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
