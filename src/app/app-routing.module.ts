import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'editar/:id',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
