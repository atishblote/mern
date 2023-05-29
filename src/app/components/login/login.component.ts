import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  uname:any
  userpass:any
  uData: any
  constructor(private globalService: GlobalService, private router: Router){}


  getSignUpDetails(){
    console.log(this.uname)
    console.log(this.userpass)

    
    this.globalService.getUserData().subscribe((res)=>{
      //console.log(res);
      this.uData = res
      const filterUdata  = this.uData.filter((item:any)=>{ return item.username == this.uname && item.password == this.userpass})
      console.log(filterUdata)
      if(filterUdata.length > 0){
        this.globalService.userLogin(this.uname)
        this.router.navigate(['/crud'])
      }else{
        alert("Login Details  is faild")
        this.uname = ""
        this.userpass = ""
      }
    })
  }

}
