import { Component } from '@angular/core';

@Component({
  selector: 'app-utdf',
  templateUrl: './utdf.component.html',
  styleUrls: ['./utdf.component.css']
})

export class UtdfComponent {

  courses:string[] = ["Angular","React","Java","JavaScript","Node Js","HTML","CSS"];



  getSubmitForm(data:any){
    console.log(data);
  }

}
