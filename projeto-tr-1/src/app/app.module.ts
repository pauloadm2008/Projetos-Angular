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

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { CascadeselectComponent } from './cascadeselect/cascadeselect.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsComponent } from './chips/chips.component';
import { ChipsModule } from 'primeng/chips';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { EditorComponent } from './editor/editor.component';
import { EditorModule } from 'primeng/editor';
import { InputgroupComponent } from './inputgroup/inputgroup.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputmaskComponent } from './inputmask/inputmask.component';
import { InputMaskModule } from 'primeng/inputmask';
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
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    InputTextModule,
    RadioButtonModule,
    InputMaskModule,
  ],
  declarations: [
    AppComponent,
    
    AutocompleteComponent,
          CalendarComponent,
          CascadeselectComponent,
          CheckboxComponent,
          ChipsComponent,
          ColorpickerComponent,
          DropdownComponent,
          EditorComponent,
          InputgroupComponent,
          InputmaskComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}