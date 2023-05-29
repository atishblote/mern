import { Component, ViewChild } from '@angular/core';
import { ChangeColorDirective } from 'src/app/custom-directive/change-color.directive';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent {

  @ViewChild(ChangeColorDirective) chColorDirec: ChangeColorDirective | undefined

  constructor(){

  }

  changeColorComponet(cColor:any){
    this.chColorDirec?.ChangeColor(cColor)
  }
}
