import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotoService } from './services/photo.service';
import { SearchService } from './services/search.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { GeneratorComponent } from './components/generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    HomeComponent,
    PhotoListComponent,
    SpinnerComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PhotoService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
