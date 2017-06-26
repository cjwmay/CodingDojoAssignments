import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { CommunicateService } from './communicate.service';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ResultComponent } from './result/result.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ResultComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [HttpService,CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
