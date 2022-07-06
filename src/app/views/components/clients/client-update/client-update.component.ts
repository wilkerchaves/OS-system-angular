import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  constructor(private router: Router, private service: ClientService, private route: ActivatedRoute) { }
  tech_id = ''

  client: Client = {
    id: null,
    name: '',
    cpf: '',
    phone: ''
  }

  name = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  phone = new FormControl('', [Validators.minLength(11)])


  ngOnInit(): void {
    this.tech_id = this.route.snapshot.paramMap.get("id")!
    this.findById()
  }

  findById(): void {
    this.service.findByid(this.tech_id).subscribe(response => {
      this.client = response;
    })
  }
  cancel(): void {
    this.router.navigate(['clients'])
  }

  update(): void {
    this.service.update(this.client).subscribe((response) => {
      this.router.navigate(['clients'])
      this.service.successMessage("As informações foram atualizadas com sucesso!")
    }, error => {
      if (error.error.error.match('já cadastrado')) {
        this.service.erroMessage(error.error.error);
      } else {
        this.service.erroMessage("Número de CPF inválido!" + error)
        console.log(error)
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

