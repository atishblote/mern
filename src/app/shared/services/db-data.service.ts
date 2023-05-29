import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbDataService {

  constructor( private http: HttpClient ) { }

banseurl = "http://localhost:3000/posts"

  //gets all data 
  getsResponce(){
    return this.http.get('http://localhost:3000/posts')
  }

  // get single data
  getResponce(id:any){
    let getUrl = `${this.banseurl}/${id}`

    return this.http.get(getUrl)
  }

  // delete
  deleteRespoce(id:any){
    let deleteUrl = `${this.banseurl}/${id}`
    return this.http.delete(deleteUrl)
  }

  // add
  addResponce(data:any){
    return this.http.post(this.banseurl, data)
  }

  // update
  putResponce(putData:any){
    let putUrl = `${this.banseurl}/${putData.id}`
    return this.http.put(putUrl, putData)
  }

}
