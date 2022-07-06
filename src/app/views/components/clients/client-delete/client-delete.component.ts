import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  constructor(private router: Router, private service: ClientService, private route: ActivatedRoute) { }

  tech_id = ''

  client: Client = {
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
      this.client = response;
    })
  }
  cancel(): void {
    this.router.navigate(['technicians'])
  }

  delete(): void {
    Swal.fire({
      title:"Deseja excluir permanentemente este cliente?",
      text: "Atenção! Esta ação não pode ser revertida",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, desejo excluir'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(this.tech_id).subscribe((response) => {
          this.router.navigate(['clients'])
          this.service.successMessage("Cliente excluído com sucesso!")
        }, error => {
          this.service.erroMessage("Erro ao excluir: "+error.error.error)
    
    
        })
      }
    })




   
  }



}
