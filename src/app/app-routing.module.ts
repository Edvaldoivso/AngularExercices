import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages

import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
