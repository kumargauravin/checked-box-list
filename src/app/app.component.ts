import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'npm-checked-box-list';
  form: FormGroup;
  values = [{id:1,name:"Option 1"},{id:2,name:"Option 2"}];
  constructor(){
    this.form = new FormGroup({
      orders: new FormControl()
   });
   this.values.push({id:3,name:"Option 3"});
   this.values.push({id:4,name:"Option 4"});
  }
}
