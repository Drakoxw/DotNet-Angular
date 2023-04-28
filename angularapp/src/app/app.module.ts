import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import { MessageComponent } from './Components/message/message.component';
import { ChatComponent } from './Views/chat/chat.component';
import { CardsComponent } from './Views/cards/cards.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ForestCastComponent } from './Views/forest-cast/forest-cast.component';
import { ButtonComponent } from './Components/button/button.component';
import { DocComponent } from './Views/doc/doc.component';
import { CardListComponent } from './Components/creditCard/card-list/card-list.component';
import { CardFormComponent } from './Components/creditCard/card-form/card-form.component';
import { HttpRequestInterceptor } from './Core/interceptor/http-request.interceptor';
import { CardTableElementComponent } from './Components/creditCard/card-table-element/card-table-element.component';
import { ModalComponent } from './Components/modal/modal.component';
import { CardTableFooterComponent } from './Components/creditCard/card-table-footer/card-table-footer.component';
import { FilterCardsPipe } from './Core/pipes/filter-cards.pipe';
import { MaskNumberCardsPipe } from './Core/pipes/mask-number-cards.pipe';

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
    CardFormComponent,
    CardTableElementComponent,
    ModalComponent,
    CardTableFooterComponent,
    FilterCardsPipe,
    MaskNumberCardsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
