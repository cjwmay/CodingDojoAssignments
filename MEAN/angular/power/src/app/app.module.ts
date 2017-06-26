import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SuperComponent } from './super/super.component';
import { SaiyantwoComponent } from './saiyantwo/saiyantwo.component';
import { SaiyanthreeComponent } from './saiyanthree/saiyanthree.component';
import { SaiyanfourComponent } from './saiyanfour/saiyanfour.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HumanComponent,
    SaiyanComponent,
    SuperComponent,
    SaiyantwoComponent,
    SaiyanthreeComponent,
    SaiyanfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
