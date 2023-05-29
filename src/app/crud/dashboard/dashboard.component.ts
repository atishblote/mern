import { Component, OnInit } from '@angular/core';
import { DbDataService } from 'src/app/shared/services/db-data.service';
import { UpcommingMatchService } from 'src/app/shared/services/upcomming-match.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postData: any
  upCommingMatch: any
  term: any
  term2: any
  p: number = 1
  p2: number = 1
  order: string = ''
  reverse: boolean = false

  constructor(private dbSevice: DbDataService, private upMatch: UpcommingMatchService) { }

  ngOnInit(): void {
    this.getMatch()

    this.upMatch.getUpcommingMatch().subscribe((res) => {
      console.log(res)

      this.upCommingMatch = res
    })
  }

  getMatch() {
    this.dbSevice.getsResponce().subscribe((res) => {
      console.log(res)
      this.postData = res
    })
  }
  deleteMatch(myid: any) {
    this.dbSevice.deleteRespoce(myid).subscribe((res) => {
      this.getMatch()
    })
  }

  //reverse sort
  orderRsort() {
    this.reverse = !this.reverse

  }


  // getLoginData() {
  //   const data2 =
  //   {
  //     "phone": "919699021846",
  //     "password": "Abcd@123"
  //   }

  //   this.upMatch.getLoginData(data2)
  // }



}
