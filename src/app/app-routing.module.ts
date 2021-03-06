import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DisplayQouteComponent } from './display-qoute/display-qoute.component';


const routes: Routes = [
  { path: "about", component: AboutComponent},
  {path: "Display-quote", component: DisplayQouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
