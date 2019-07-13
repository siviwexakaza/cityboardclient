import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentProvince='';
  cities:Object;

  constructor(private chat : ChatService, private router: Router) { }

  showChats(objCity){
    this.chat.currentCity=objCity.name;
    this.router.navigate(['/chats']);

  }

  ngOnInit() {
    this.currentProvince=this.chat.currentProvince;
    
    this.chat.getCities().subscribe(data=>{
      this.cities=data;

    });
  }

}
