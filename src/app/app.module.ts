import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat/chat.service';
import {NgxAutoScrollModule} from "ngx-auto-scroll";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxAutoScrollModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
