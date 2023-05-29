import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent implements OnInit {

  products:any
  

  constructor(private dataService: DataService){
  }

  ngOnInit(): void {
    this.products = this.dataService.myService
    
  }
  
}
