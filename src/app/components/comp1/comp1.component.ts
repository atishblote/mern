import { Component, ViewChild } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

@ViewChild(Comp2Component) cp2: Comp2Component | undefined

  comp1:number = 0
  constructor(){}

  comp1Fun(){
    this.comp1++
  }
  comp1Decr(){
    this.comp1--
  }
  

}
