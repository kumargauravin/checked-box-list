import { Component, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Pipe({name: 'log'})
export class LogPipe implements PipeTransform {
    public transform(value: object): void {
        console.log(value);
        return;
    }
}

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
   this.values.push({id:3,name:"HavePets",checked:true});
   this.values.push({id:4,name:"haveChildren",checked:true});
   this.values.push({id:5,name:"haveJob",checked:true});
   this.values.push({id:6,name:"ssn",checked:false});
   this.values.push({id:7,name:"nationality",checked:false});
   this.values.push({id:8,name:"anyDisability",checked:false});
   Object.keys(this.form.controls).forEach(control => {
    this.form.controls[control].markAsPristine();
  });
  }
  filter(forced:boolean=false){
    //if (this.form.controls.search.value.length > 0 || forced) { 
    let self=this;
    this.values.map(function(item) {
      if(item.name.toLowerCase().indexOf(self.form.controls.search.value.toLowerCase()) == -1) {
        item.hide=true;
      } else item.hide = false;
      return item;
    });
  //}
  }
  reset(){
    this.form.controls.search.setValue("");
    this.filter(true);
  }
}
