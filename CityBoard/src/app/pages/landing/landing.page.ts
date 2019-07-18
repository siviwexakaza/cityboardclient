import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  loading=true;

  constructor(private chatService:ChatService , private router:Router , private store : StorageService) { }


  ngOnInit() {

    this.chatService.getProvinces().subscribe(data =>{
      this.store.getUsername().then(usern=>{
        console.log(usern);
        if(usern===null){
          this.router.navigate(['/login']);
        }else{
          this.router.navigate(['/home']);
        }
      }).catch(err=>console.log(err));
      
    });

  }

}
