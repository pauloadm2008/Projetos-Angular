import { InputBoxComponent } from './components/input-box/input-box.component';
import { RadioInputComponent } from './components/radio-input/radio-input.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercasePipe } from './pipes/uppercase';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    RadioInputComponent,
    UppercasePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
