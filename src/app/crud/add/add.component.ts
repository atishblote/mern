import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbDataService } from 'src/app/shared/services/db-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

addData:any

  constructor(private bdService: DbDataService , private router: Router){}

  submitMatchdata(fData:any){
    const objData = {
      title: fData.matchtitle,
      releaseDate: fData.version
    }

    this.bdService.addResponce(objData).subscribe((res)=>{
      alert("data has been added");

      this.router.navigate(['crud']);
    })
  }



}
