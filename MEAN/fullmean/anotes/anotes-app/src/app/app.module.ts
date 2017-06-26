import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageboardComponent } from './messageboard/messageboard.component';
import { NewComponent } from './messageboard/new/new.component';
import { ListComponent } from './messageboard/list/list.component';

import{ MessageboardService } from './messageboard.service';
@NgModule({
  declarations: [
    AppComponent,
    MessageboardComponent,
    NewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MessageboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
