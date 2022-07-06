import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { OS } from 'src/app/models/orderService';
import { Technician } from 'src/app/models/technician';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {
  order_id = ''
  technicianName = ''
  client: Client = {
    id: '',
    name: '',
    cpf: '',
    phone: ''
  }

  os: OS = {
    id: '',
    startDate: '',
    finishDate: '',
    priority: '',
    observation: '',
    status: '',
    technician: '',
    client: '',
    statusDescrib: ''
  }
  techList: Technician[] = [];
  clientList: Client[] = [];


  constructor(
    private router: Router,
    private service: OsService,
    private technicianService: TechnicianService,
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.order_id = this.route.snapshot.paramMap.get("id")!
    this.findById()
    this.getTechnicians()
    this.getClients()
  }

  findById(): void {
    this.service.findByid(this.order_id).subscribe(response => {
      this.os = response
      this.dataStatusConverter()
      this.dataPriorityConverter()
    })

  }

  cancel(): void {
    this.router.navigate(['orders'])
  }

  update(): void {
    console.log(this.os)
    this.service.update(this.os).subscribe((response) => {

      this.service.successMessage("As informações foram atualizadas com sucesso!")
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

  dataStatusConverter(): void {
    if (this.os.status == "ABERTO") {
      this.os.status = 1
    } else if (this.os.status == "EM_ANDAMENTO") {
      this.os.status = 2
    } else  {
      this.os.status = 3
    }
  }

  dataPriorityConverter(): void {
    if (this.os.priority == "BAIXA") {
      this.os.priority = 1
    } else if (this.os.priority == "MÉDIA") {
      this.os.priority = 2
    } else {
      this.os.priority = 3
    }
  }






}
