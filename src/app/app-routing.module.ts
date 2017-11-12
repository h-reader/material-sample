import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCurrryComponent } from './order-currry/order-currry.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [

  { path: 'order', component: OrderCurrryComponent },
  { path: 'list', component: OrderListComponent },
  {
    path: '',
    redirectTo: 'order',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
