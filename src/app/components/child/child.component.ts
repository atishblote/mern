import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() pdata:any

  @Output() emiterObj = new EventEmitter();
  constructor(){

  }
  sendNameFunCh(val: any){
    this.emiterObj.emit(val)
    console.log(val);
  }
  
}
