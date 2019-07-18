import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private store : Storage) { }

  USERNAME_STORE ='my-username';

  addUsername(username){
    return this.store.get(this.USERNAME_STORE).then((usern)=>{
      if(usern){
        return null;

      }else{
        
        return this.store.set(this.USERNAME_STORE,[username]);
      }
    });
  }

  getUsername(){
    return this.store.get(this.USERNAME_STORE);
  }
}
