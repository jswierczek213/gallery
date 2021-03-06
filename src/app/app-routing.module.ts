import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'generator', component: GeneratorComponent },
  { path: 'photo/:id', component: PhotoDetailsComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
