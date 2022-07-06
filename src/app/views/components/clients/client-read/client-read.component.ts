import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements AfterViewInit {

  clients: Client[]=[];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone','action'];
  dataSource = new MatTableDataSource<Client>(this.clients);



  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service : ClientService, private router:Router){}
 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((reponse)=>{
      this.clients = reponse;
      this.dataSource = new MatTableDataSource<Client>(this.clients);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['clients/create'])
  
  }
  

}

