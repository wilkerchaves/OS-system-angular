import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { TechnicianReadComponent } from './views/components/technicians/technician-read/technician-read.component';
import { TechnicianCreateComponent } from './views/components/technicians/technician-create/technician-create.component';
import { TechnicianUpdateComponent } from './views/components/technicians/technician-update/technician-update.component';
import { TechnicianDeleteComponent } from './views/components/technicians/technician-delete/technician-delete.component';
import { ClientReadComponent } from './views/components/clients/client-read/client-read.component';
import { ClientCreateComponent } from './views/components/clients/client-create/client-create.component';
import { ClientUpdateComponent } from './views/components/clients/client-update/client-update.component';
import { ClientDeleteComponent } from './views/components/clients/client-delete/client-delete.component';
import { OrderReadComponent } from './views/components/orders/order-read/order-read.component';
import { OrderCreateComponent } from './views/components/orders/order-create/order-create.component';
import {MatStepperModule} from '@angular/material/stepper';
import { OrderUpdateComponent } from './views/components/orders/order-update/order-update.component';
import { OrderViewComponent } from './views/components/orders/order-view/order-view.component';
import { OrderFinishedComponent } from './views/components/orders/order-finished/order-finished.component';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TechnicianReadComponent,
    TechnicianCreateComponent,
    TechnicianUpdateComponent,
    TechnicianDeleteComponent,
    ClientReadComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDeleteComponent,
    OrderReadComponent,
    OrderCreateComponent,
    OrderUpdateComponent,
    OrderViewComponent,
    OrderFinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatStepperModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
