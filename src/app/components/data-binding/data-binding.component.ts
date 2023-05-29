import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  creatorName: string = "Atish Lote";

  userAge: number = 26;

  imgSrc: string = "./assets/img/banner (2).webp"

   inputTrigger: boolean = false

   inputValue: string = ""


  //  toggle image url
  toggleImgUrl: string = "./assets/img/banner (2).webp"
  imageName: string = "first image"

  flag: number = 0

  //Refrance Variable
  displayName(val:string){
    alert(val);
  }


  constructor(){
    
  }
  disableInputfunc() {
    this.inputTrigger = true
  }
  TwoWayDisableInputfunc = () => {
    alert(this.inputValue)
  } 

  // toggle image
  toggleImage = () => {

    if(this.flag == 0){
      this.imageName = "second Image"
      this.toggleImgUrl = "./assets/img/img2.webp"
      this.flag = 1
    }else{
      this.toggleImgUrl = "./assets/img/banner (2).webp"
      this.imageName = "first image"
      this.flag = 0
    }

  } 

}

