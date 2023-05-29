import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  message: string = "Hello from pipes string"

  objects: Object  = ["a","b","c","d"]

  myDate = new Date()

  gender: string = 'other';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};

  coutryDatas = [
    {sr:"1",name:'atish', gender:"male"},
    {sr:"2",name:'purva', gender:"female"},
    {sr:"3",name:'samu', gender:"female"},
    {sr:"4",name:'ganesh', gender:"male"},
    {sr:"5",name:'subodh', gender:"male"}
  ]
  constructor( private _router: Router){}


  setNavigateRno(roll: any){
    this._router.navigate(['/pipes',roll])
  }
}
