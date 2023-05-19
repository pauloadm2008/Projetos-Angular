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
import { InputswitchComponent } from './inputswitch/inputswitch.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputtextComponent } from './inputtext/inputtext.component';
import { InputtextareaComponent } from './inputtextarea/inputtextarea.component';
import { InputnumberComponent } from './inputnumber/inputnumber.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobComponent } from './knob/knob.component';
import { KnobModule } from 'primeng/knob';
import { KeyfilterComponent } from './keyfilter/keyfilter.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxComponent } from './listbox/listbox.component';
import { ListboxModule } from 'primeng/listbox';
import { MultselectComponent } from './multiselect/multselect.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordComponent } from './password/password.component';
import { PasswordModule } from 'primeng/password';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { RatingComponent } from './rating/rating.component';
import { RatingModule } from 'primeng/rating';
import { SelectbuttonComponent } from './selectbutton/selectbutton.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderComponent } from './slider/slider.component';
import { SliderModule } from 'primeng/slider';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeselectComponent } from './treeselect/treeselect.component';
import { TristatecheckboxComponent } from './tristatecheckbox/tristatecheckbox.component';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { ToggleButtonModule } from 'primeng/togglebutton';


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
    InputSwitchModule,
    InputTextModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RatingModule,
    SelectButtonModule,
    SliderModule,
    TreeSelectModule,
    TriStateCheckboxModule,
    ToggleButtonModule,
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
          InputswitchComponent,
          InputtextComponent,
          InputtextareaComponent,
          InputnumberComponent,
          KnobComponent,
          KeyfilterComponent,
          ListboxComponent,
          MultselectComponent,
          PasswordComponent,
          RadiobuttonComponent,
          RatingComponent,
          SelectbuttonComponent,
          SliderComponent,
          TreeselectComponent,
          TristatecheckboxComponent,
          TogglebuttonComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}