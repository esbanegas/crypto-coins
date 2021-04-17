import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CoinsComponent } from './coins/coins.component';

//Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoinContainerComponent } from './coin-container/coin-container.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoinSpinnerComponent } from './coin-spinner/coin-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoinsComponent,
    CoinDetailComponent,
    CoinContainerComponent,
    CoinSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatProgressSpinnerModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
