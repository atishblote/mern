import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbDataService } from 'src/app/shared/services/db-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  empData:any
  id: any
  constructor(private actrouter: ActivatedRoute, private service: DbDataService, private router: Router) { }

  ngOnInit(): void {
    this.actrouter.paramMap.subscribe((res) => {
      this.id = res.get('id')
      console.log(this.id)

    })

    this.service.getResponce(this.id).subscribe((res)=>{
      console.log(res)
    // process dat  a 
      this.empData = {...res}
      console.log(this.empData.id)


    })

  }
  
  PutData(data: any) {
    console.log(data)
    const verData = {
      id : this.id,
      title : data.title,
      releaseDate : data.releseversion
    }
    this.service.putResponce(verData).subscribe(()=>{
      alert("Data Update Successfuly")
      this.router.navigate(['crud']);

    })
  }




}
