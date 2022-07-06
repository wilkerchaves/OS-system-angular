import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    id: '',
    name: '',
    cpf: '',
    phone: ''
  }

  name = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  phone = new FormControl('', [Validators.minLength(11)])

  constructor(private router: Router, private service: ClientService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['clients'])
  }

  create(): void {
    this.service.create(this.client).subscribe((response) => {
      this.router.navigate(['clients'])
      this.service.successMessage("Cliente criado com sucesso!")
    }, error => {
      if (error.error.error.match('já cadastrado')) {
        this.service.erroMessage(error.error.error);
      } else {
        this.service.erroMessage("Número de CPF inválido!")
      }


    })
  }

  errorValidName() {
    if (this.name.invalid) {
      return 'O nome precisa ter no mínimo 5 caracteres'
    }
    return false
  }
  errorValidCPF() {
    if (this.cpf.invalid) {
      return 'O CPF precisa ter 11 números'
    }
    return false
  }

  errorValidPhone() {
    if (this.phone.invalid) {
      return 'O telefone precisa ter 11 números'
    }
    return false
  }

}
