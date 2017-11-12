import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule,
  MatRadioModule, MatToolbarModule, MatOptionModule, MatSelectModule, MatSliderModule,
  MatChipsModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderCurrryComponent } from './order-currry/order-currry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderCurrryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatSliderModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
