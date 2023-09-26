import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {CardComponent} from './components/card/card.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {RouterModule, Routes} from "@angular/router";
import {AnimalProfileComponent} from './animal-profile/animal-profile.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoaderComponent } from './components/loader/loader.component';

const routes: Routes = [
  {path: '', redirectTo: 'animals', pathMatch: 'full'},
  {
    path: 'animals', children: [
      {path: '', component: DashboardComponent},
      {path: ':id', component: AnimalProfileComponent},]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    AnimalProfileComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
