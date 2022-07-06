import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { OS } from 'src/app/models/orderService';
import { Technician } from 'src/app/models/technician';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  techList: Technician[] = []
  clientList: Client[] = []

  os: OS = {
    id: '',
    startDate: '',
    finishDate: '',
    priority: '',
    observation: '',
    status: '',
    technician: '',
    client: '',
    statusDescrib:''
  }


  constructor(
    private router: Router,
    private service: OsService,
    private technicianService: TechnicianService,
    private clientService: ClientService
  ) { }


  ngOnInit(): void {
    this.getTechnicians()
    this.getClients()
  }

  cancel(): void {
    this.router.navigate(['orders'])
  }

  create(): void {
    console.log(this.os)
    this.service.create(this.os).subscribe((response) => {

      this.service.successMessage("Ordem de serviço criada com sucesso!")
      this.router.navigate(['orders'])
    }, error => {
      this.service.erroMessage(error.error.error);
    })
  }

  getTechnicians(): void {
    this.technicianService.findAll().subscribe(response => {
      this.techList = response
    })
  }

  getClients(): void {
    this.clientService.findAll().subscribe(response => {
      this.clientList = response
    })
  }



}
