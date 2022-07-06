import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from 'src/app/services/technician.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-technician-delete',
  templateUrl: './technician-delete.component.html',
  styleUrls: ['./technician-delete.component.css']
})
export class TechnicianDeleteComponent implements OnInit {
  constructor(private router: Router, private service: TechnicianService, private route: ActivatedRoute) { }

  tech_id = ''

  technician: Technician = {
    id: '',
    name: '',
    cpf: '',
    phone: ''
  }

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

  delete(): void {
    Swal.fire({
      title:"Deseja excluir permanentemente este técnico?",
      text: "Atenção! Esta ação não pode ser revertida",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, desejo excluir'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(this.tech_id).subscribe((response) => {
          this.router.navigate(['technicians'])
          this.service.successMessage("Técnico excluído com sucesso!")
        }, error => {
          this.service.erroMessage("Erro ao excluir: "+error.error.error)
    
    
        })
      }
    })




   
  }



}
