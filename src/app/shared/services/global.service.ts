import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private httpClient: HttpClient, private authGuard: AuthGuard) { }

  getUserData(){
    return this.httpClient.get('http://localhost:3000/users')
   }

   userLogin(username:any){
    sessionStorage.setItem("userkey", username);
   }
   signOut(){
    sessionStorage.removeItem("userkey")
   }

}
