import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class  RtfComponent implements OnInit {
  stuData: any

  subData:any = ["Angular","Node Js", "HTML","CSS","JavaScript","React"]
  

  // using realtive template driven form
  // constructor() {
  //   this.stuData = new FormGroup(
  //     {
  //       rtfFname: new FormControl("",[
  //         Validators.required
  //       ]
  //       ),
  //       rtfLname: new FormControl('',
  //       [
  //         Validators.required
  //       ]
  //       ),
  //       rtfCources: new FormControl('',
  //       [
  //         Validators.required
  //       ]
  //       ),
  //       rtfNumber: new FormControl('',
  //       [
  //         Validators.required,
  //         Validators.pattern('[0-9999999999]{10}')
  //       ]
  //       ),
  //       rtfEmail: new FormControl('',
  //       [
  //         Validators.required,
  //         Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
  //       ]
  //       ),
  //       rtfPassword: new FormControl('',
  //       [
  //         Validators.required,
  //         Validators.pattern('[a-zA-z]{5}')        ]
  //       )

  //     }
  //   )
  // }


  // using form builder
  constructor(private fb: FormBuilder){
    
  }

  ngOnInit(): void {
    this.stuData = this.fb.group(
      {
        rtfFname: ['', [Validators.required]],
        rtfLname: ['', [Validators.required]],
        rtfCources: ['', [Validators.required]],
        rtfNumber: ['', [Validators.required, Validators.pattern('[0-9999999999]{10}')]],
        rtfEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
        rtfPassword: ['', [Validators.required, Validators.pattern('[a-zA-z]{5}')]]
      }
    )
  }

  rtfFunction(value: any) {
    console.log(value)
  }


}
