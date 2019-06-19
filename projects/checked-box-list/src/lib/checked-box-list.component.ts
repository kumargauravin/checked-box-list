import { Component, Input, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'ng6-checked-box-list',
  templateUrl: "template.html",
  styleUrls: ['./style.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckedBoxListComponent),
      multi: true
    }
  ]
})
export class CheckedBoxListComponent implements ControlValueAccessor {
  @Input('values') orders: any;
  @Input() returnKey: string;
  @Input() maxHeightPx: string;

  selectedOrderIds: any;

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
  registerOnTouched() {
    this.sendData();
  }

  constructor() {
  }

  submit(i, event) {
    this.orders[i].checked = event.srcElement.checked;
    this.sendData();
  }

  sendData() {
    this.selectedOrderIds = this.orders.map((v, i) => v.checked ? (this.returnKey ? this.orders[i][this.returnKey] : this.orders[i]) : null)
      .filter(v => v !== null);
    this.propagateChange(this.selectedOrderIds);
  }
}
