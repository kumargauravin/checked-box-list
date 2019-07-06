import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CheckedBoxListModule } from 'checked-box-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent, LogPipe } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LogPipe
  ],
  imports: [
    BrowserModule,
    CheckedBoxListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
