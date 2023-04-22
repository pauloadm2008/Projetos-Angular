import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TagModule } from 'primeng/tag';
@NgModule({
  imports: [
    BrowserModule,
    TagModule,
    ButtonModule,
    CarouselModule,
    BrowserAnimationsModule,
    AccordionModule,
    MessagesModule,
    MessageModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
