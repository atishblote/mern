import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {

  // for loop

  carsBrand: string[] = ["BMW", "Scoda", "Maruti", "Tata", "Mahindra", "Ceverelat"]
  bikeBrands: string[] = ["Kawasaki", "BMW", "Honda", "Hero", "Suzuki"]

  // Switch case


  carVariable: string = ""
  showClickBrand: string = ""
  setButtonCars: boolean = false
  setButtonBike: boolean = false
  constructor() {

  }

  // functions
  carsPrintFn() {
    this.setButtonCars = true
  }
  bikePrintFn() {
    this.setButtonBike = true
  }
  showSelectedName(clickVal:string){
    //alert(clickVal)
    this.showClickBrand = clickVal;

  }
}
