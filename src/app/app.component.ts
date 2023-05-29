import { Component } from '@angular/core';
import { GlobalService } from './shared/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
 
  constructor(private globalService: GlobalService, private router: Router){}

  logOutSession(){
    this.globalService.signOut()
    this.router.navigate([''])
  }

}
