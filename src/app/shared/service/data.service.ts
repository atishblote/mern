import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  myService: any = [
    {
      id: 9582,
      year: 2008,
      make: "Buick",
      model: "Enclave",
      type: "SUV"
    },
    {
      id: 9583,
      year: 2006,
      make: "MINI",
      model: "Convertible",
      type: "Convertible"
    },
    {
      id:9584,
      year:2019,
      make:"Volvo",
      model:"XC90",
      type:"SUV"

    },
    {
      id:9585,
      year:1999,
      make:"Ford",
      model:"Taurus",
      type:"Sedan, Wagon"
    },
    {
      id:9586,
      year:2020,
      make:"Volvo",
      model:"XC60",
      type:"SUV"
    },
    {
      id:9587,
      year:2006,
      make:"HUMMER",
      model:"H2",
      type:"SUV, Pickup",
    },
    {
      id:9591,
      year:2010,
      make:"Mitsubishi",
      model:"Outlander",
      type:"SUV"
    }
  ]

  constructor() { }

}
