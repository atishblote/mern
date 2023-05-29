import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  myVariable:boolean = false
  

  // for loop

  fruits:string[] = ["Apple","Banana","Mango","Pinapple","Orange","Red Chilli"]
  carsBrand:string[] = ["BMW","Scoda","Maruti","Tata","Mahindra","Ceverelat"]
  bikeBrands:string[] = ["Kawasaki","BMW","Honda","Hero","Suzuki"]

// Switch case

mySwichVariable:string = "Apple"

carVariable:string = ""

setButtonCars:boolean = false
setButtonBike:boolean = false


//ngStyel variable
flag: boolean = true
myStyle = {
  color: this.flag? "red" : "green",
  background: !this.flag? "black" : "gray"
}

// ngClass variable
myClass = {
  "bgColor": this.flag,
  "textUnder": this.flag
}

//example
setLiFlag: boolean = true

liClass:any = ""

  constructor(){


  }

  carsPrintFn(){
    this.setButtonCars = true
  }
  bikePrintFn(){
    this.setButtonBike = true
  }

  //example
  liClickFn(){
    this.setLiFlag = false
    this.liClass = {
      "textUnder": this.setLiFlag,
      "bgColor": !this.setLiFlag
    }
  }
}
