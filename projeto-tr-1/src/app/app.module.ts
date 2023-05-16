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
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { AccordionComponent } from './componentes/accordion/accordion.component';
import { AutocompleteComponent } from './componentes/autocomplete/autocomplete.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
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
    AutoCompleteModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    CarouselComponent,
    AccordionComponent,
    AutocompleteComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
