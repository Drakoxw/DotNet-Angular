import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessageComponent } from './Components/message/message.component';
import { ChatComponent } from './Views/chat/chat.component';
import { CardsComponent } from './Views/cards/cards.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ForestCastComponent } from './Views/forest-cast/forest-cast.component';
import { ButtonComponent } from './Components/button/button.component';
import { DocComponent } from './Views/doc/doc.component';
import { CardListComponent } from './Components/creditCard/card-list/card-list.component';
import { CardFormComponent } from './Components/creditCard/card-form/card-form.component';
import { HttpRequestInterceptor } from './Core/http-request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatComponent,
    CardsComponent,
    NavBarComponent,
    ForestCastComponent,
    ButtonComponent,
    DocComponent,
    CardListComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
