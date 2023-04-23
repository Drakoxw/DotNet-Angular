import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './Components/message/message.component';
import { ChatComponent } from './Views/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
