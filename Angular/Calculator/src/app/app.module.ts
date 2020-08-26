import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdditionComponent } from './addition/addition.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { OperationsComponent } from './operations/operations.component';
import { StringsComponent } from './strings/strings.component';
import { ArraysComponent } from './arrays/arrays.component';
import { LengthComponent } from './strings/length/length.component';
import { ReverseComponent } from './strings/reverse/reverse.component';
import { ConcatComponent } from './strings/concat/concat.component';
import { FindCharComponent } from './strings/find-char/find-char.component';
import { SubStringComponent } from './strings/sub-string/sub-string.component';
import { PalindromeComponent } from './strings/palindrome/palindrome.component';
import { ForEachComponent } from './arrays/for-each/for-each.component';
import { MapComponent } from './arrays/map/map.component';
import { FilterComponent } from './arrays/filter/filter.component';
import { ReduceComponent } from './arrays/reduce/reduce.component';
import { SpliceComponent } from './arrays/splice/splice.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsMapComponent } from './rxjs/rxjs-map/rxjs-map.component';
import { RxjsConcatComponent } from './rxjs/rxjs-concat/rxjs-concat.component';
import { ObjectsComponent } from './objects/objects.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdditionComponent,
    SubstractionComponent,
    MultiplicationComponent,
    DivisionComponent,
    NavBarComponent,
    FooterComponent,
    OperationsComponent,
    StringsComponent,
    ArraysComponent,
    LengthComponent,
    ReverseComponent,
    ConcatComponent,
    FindCharComponent,
    SubStringComponent,
    PalindromeComponent,
    ForEachComponent,
    MapComponent,
    FilterComponent,
    ReduceComponent,
    SpliceComponent,
    RxjsComponent,
    RxjsMapComponent,
    RxjsConcatComponent,
    ObjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
