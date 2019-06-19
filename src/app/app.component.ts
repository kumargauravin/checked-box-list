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
  values:any = [{id:1,name:"Gender"},{id:2,name:"Married"}];
  constructor(){
    this.form = new FormGroup({
      orders: new FormControl(),
      search: new FormControl()
   });
   this.values.push({id:3,name:"HavePets"});
   this.values.push({id:4,name:"haveChildren",checked:true});
  }
  filter(){
    this.reset();
    if (this.form.controls.search.value.length > 0) { 
    let self=this;
    this.values.map(function(item) {
      if(item.name.toLowerCase().indexOf(self.form.controls.search.value.toLowerCase()) == -1) {
        item.hide=true;
      }
      return item;
    });
  }
  }
  reset(){
    this.values.map(function(item) { 
      delete item.hide; 
      return item; 
    });
  }
}
