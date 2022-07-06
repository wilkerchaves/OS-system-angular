import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-update',
  templateUrl: './technician-update.component.html',
  styleUrls: ['./technician-update.component.css']
})
export class TechnicianUpdateComponent implements OnInit {

  constructor(private router: Router, private service: TechnicianService, private route: ActivatedRoute) { }
  tech_id = ''

  technician: Technician = {
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
      this.technician = response;
    })
  }
  cancel(): void {
    this.router.navigate(['technicians'])
  }

  update(): void {
    this.service.update(this.technician).subscribe((response) => {
      this.router.navigate(['technicians'])
      this.service.successMessage("As informações atualizadas com sucesso!")
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
