import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Clients } from '../common/clients';
import { ClientsService } from '../services/clients.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [RouterLink , RouterLinkActive,CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  clients:Clients[]=[];

  constructor(private clientService:ClientsService){}

  ngOnInit(): void {
    this.clientsList();
  } 

  clientsList() {
    this.clientService.getClientsList().subscribe(
      data => {
        this.clients = data;
        console.log(this.clients)
      }
    )
  }

}
