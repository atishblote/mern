import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  data: any

  getChildData: any
  constructor(){

  }

  sendNameFun(val: any){
    this.data = val
    console.log(val);
  }
}
