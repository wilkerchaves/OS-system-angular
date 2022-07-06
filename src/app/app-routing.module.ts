import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './views/components/clients/client-create/client-create.component';
import { ClientDeleteComponent } from './views/components/clients/client-delete/client-delete.component';
import { ClientReadComponent } from './views/components/clients/client-read/client-read.component';
import { ClientUpdateComponent } from './views/components/clients/client-update/client-update.component';
import { HomeComponent } from './views/components/home/home.component';
import { OrderCreateComponent } from './views/components/orders/order-create/order-create.component';
import { OrderFinishedComponent } from './views/components/orders/order-finished/order-finished.component';
import { OrderReadComponent } from './views/components/orders/order-read/order-read.component';
import { OrderUpdateComponent } from './views/components/orders/order-update/order-update.component';
import { OrderViewComponent } from './views/components/orders/order-view/order-view.component';
import { TechnicianCreateComponent } from './views/components/technicians/technician-create/technician-create.component';
import { TechnicianDeleteComponent } from './views/components/technicians/technician-delete/technician-delete.component';
import { TechnicianReadComponent } from './views/components/technicians/technician-read/technician-read.component';
import { TechnicianUpdateComponent } from './views/components/technicians/technician-update/technician-update.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'technicians',
    component:TechnicianReadComponent
  },
  {
    path:'technicians/create',
    component:TechnicianCreateComponent
  },
  {
    path:'technicians/update/:id',
    component:TechnicianUpdateComponent
  },
  {
    path:'technicians/delete/:id',
    component:TechnicianDeleteComponent
  },
  {
    path:'clients',
    component:ClientReadComponent
  },
  {
    path:'clients/create',
    component:ClientCreateComponent
  },
  {  
    path:'clients/update/:id',
    component:ClientUpdateComponent
  },
  {
    path:'clients/delete/:id',
    component:ClientDeleteComponent
  },
  {
    path:'orders',
    component:OrderReadComponent
  },
  {
    path:'orders/create',
    component:OrderCreateComponent
  },
  {
    path:'orders/finished',
    component:OrderFinishedComponent
  },
  {
    path:'orders/update/:id',
    component:OrderUpdateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
