import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, 
  FormControl, 
  Validator, ValidationErrors  } from '@angular/forms';

@Component({
  selector: 'ng6-checked-box-list',
  templateUrl: "template.html",
  styleUrls: ['./style.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckedBoxListComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckedBoxListComponent),
      multi: true,
    } 
  ]
})
export class CheckedBoxListComponent implements ControlValueAccessor, Validator {
  @Input('values') orders: any;
  @Input() maxHeightPx: string;
  @Input() windowClass: string;
  @Input() returnKey: string;
  propagateChange = (_: any) => {
  };
  showError: boolean;

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

  constructor() {}

  ngOnChanges() {}

  submit(i, event) {
    this.orders[i].checked = event.target.checked;
    this.sendData();
  }

  sendData() {
    const testSelectAll = this.orders.filter(item => !item.checked);
    this.showError = testSelectAll.length === this.orders.length;
    let prop_value = this.orders;
    if(this.returnKey && this.orders[0][this.returnKey]) {
      prop_value = this.orders.map(item => item.checked && item[this.returnKey]).filter(item => item);
    } 
    this.propagateChange(prop_value);
  }

  public validate(c: FormControl): ValidationErrors | null {
    return (this.showError) ?  {
        checkedBoxList: {
            valid: false,
        }
    } : null;
  }
}
