import { NgModule } from '@angular/core';
import { CheckedBoxListComponent } from './checked-box-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckedBoxListComponent],
  exports: [CheckedBoxListComponent]
})
export class CheckedBoxListModule { }
