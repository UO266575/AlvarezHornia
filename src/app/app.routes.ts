import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MiscelaneaComponent } from './pages/photo/miscelanea/miscelanea.component';
import { AboutComponent } from './pages/about/about.component';
import { ExhibitionsComponent } from './pages/exhibitions/exhibitions.component';
import { NarrativeComponent } from './pages/films/narrative/narrative.component';
import { PublishedBooksComponent } from './pages/publications/published-books/published-books.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'photo/miscelanea', component: MiscelaneaComponent },
    { path: 'exhibitions', component: ExhibitionsComponent },
    { path: 'films/narrative', component: NarrativeComponent },
    { path: 'publications/publishedBooks', component: PublishedBooksComponent },
    { path: 'about', component: AboutComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }