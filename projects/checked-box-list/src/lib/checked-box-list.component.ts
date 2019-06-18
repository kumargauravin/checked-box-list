import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'ng6-checked-box-list',
  templateUrl: "template.html" ,
  styleUrls: ['./style.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckedBoxListComponent ),
      multi: true
    }
  ]
})
export class CheckedBoxListComponent implements ControlValueAccessor{
  @Input('values') orders:any;
  @Input() returnKey:string;
  @Input() maxHeightPx:string;
  selectedOrderIds:any;

  propagateChange = (_: any) => {
  };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  writeValue(value: any) {
    if (value !== undefined && value !== null) {
      this.orders = value;
    }
  }
  registerOnTouched() {}

  constructor() {
    //of(this.getOrders()).subscribe(orders => {
      //console.log("Inside",orders);
      //this.orders = this.getOrders();
   // });
  }

  getOrders() {
    return [
      { id: 100, name: 'order 1' },
      { id: 200, name: 'order 2' },
      { id: 300, name: 'order 3' },
      { id: 400, name: 'order 4' }
    ];
  }

  submit(i,event) {
    /*selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);*/
    console.log("Submit",i,event, event.srcElement.checked);
    this.orders[i].checked = event.srcElement.checked;
    this.selectedOrderIds =  this.orders.map((v, i) => v.checked ? (this.returnKey?this.orders[i][this.returnKey]:this.orders[i]) : null)
    .filter(v => v !== null);
    console.log(this.selectedOrderIds);
    this.propagateChange(this.selectedOrderIds);
  }
}
