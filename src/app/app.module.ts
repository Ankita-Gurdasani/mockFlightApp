import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './root/app.component';
import { DataService } from './services/data.service';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'searchFlights/YYZ/YYC', pathMatch: 'full' },
  { path: 'searchFlights/:origin/:destination', component: FlightListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
