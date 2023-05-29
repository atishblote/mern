import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpcommingMatchService {

  constructor(private http: HttpClient) { }

  getUpcommingMatch(){
    return this.http.get('https://api.cricapi.com/v1/series?apikey=612eabf2-42c1-4bbd-af7e-135099a5d5af&offset=0&search=')
  }

  // getLoginData(data:any){
  //   let datatta = this.http.post('http://demomatrix.techwizards.io:7777/api/login' ,data, {observe: 'response'}).subscribe((res)=>{
  //     console.log(res)
  //   })
  
  // }
}
