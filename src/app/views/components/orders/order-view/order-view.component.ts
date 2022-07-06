import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/orderService';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderViewComponent implements AfterViewInit {

  os: OS[] = [];


  displayedColumns: string[] = ['client', 'technician', 'startDate', 'finishDate', 'priority', 'status', 'action'];
  displayedColumnsWithExpand = [...this.displayedColumns,'expand']
  dataSource = new MatTableDataSource<OS>(this.os);
  
  expandedElement!: OS | null;
 



  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private service: OsService,
    private router: Router,
    private technicianService: TechnicianService,
    private clientService: ClientService

  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((reponse) => {
      this.os = reponse;
      console.log(this.os)
      this.showTechnicianAndClient();
      this.dataSource = new MatTableDataSource<OS>(this.os);
      this.dataSource.paginator = this.paginator;
    },error=>{
      if(error.status==0){
        this.service.erroMessage("Erro ao buscar registros! Verifique sua conexão com a internet e tente novamente")
      }
    })
  }

  navigateToCreate(): void {
    this.router.navigate(['orders/create'])

  }

  showTechnicianAndClient(): void {
    this.os.forEach(order => {
      this.technicianService.findByid(order.technician).subscribe(response => {
        order.technician = response.name
      })
      this.clientService.findByid(order.client).subscribe(response => {
        order.client = response.name
      })
    })
  }

  priority(x: any) {
    if (x == 'BAIXA') {
      return 'baixa'
    } else if (x == 'MÉDIA') {
      return 'media'
    } else {
      return 'alta'
    }
  }



}

