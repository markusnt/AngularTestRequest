import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtigoListComponent } from './componets/artigo-list/artigo-list.component';
import { ArtigoDetailComponent } from './componets/artigo-detail/artigo-detail.component';
import { ComentarioInfoComponent } from './componets/comentario-info/comentario-info.component';
import { ArtigoInfoService } from './services/artigo-info.service';

// Importando as depencencias do prime
import {DataTableModule, SharedModule, ButtonModule, DialogModule, InputTextModule,
  CalendarModule, DropdownModule, ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    ArtigoListComponent,
    ArtigoDetailComponent,
    ComentarioInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    ConfirmDialogModule
  ],
  providers: [ArtigoInfoService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
