import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { HttpClientModule } from '@angular/common/http';
import { UserInfoEditComponent } from './user-info/edit/user-info-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoEditComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
