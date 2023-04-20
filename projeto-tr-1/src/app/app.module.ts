import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AccordionModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
