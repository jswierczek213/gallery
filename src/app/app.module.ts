import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PhotoService } from './services/photo.service';
import { SearchService } from './services/search.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StatisticsViewComponent } from './components/statistics-view/statistics-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    HomeComponent,
    PhotoListComponent,
    SpinnerComponent,
    GeneratorComponent,
    PhotoDetailsComponent,
    NotFoundComponent,
    SearchResultsComponent,
    StatisticsComponent,
    StatisticsViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PhotoService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
