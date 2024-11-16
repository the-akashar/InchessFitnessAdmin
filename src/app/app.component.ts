import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnquiryComponent } from "./enquiry/enquiry.component";
import { TrainersComponent } from "./trainers/trainers.component";
import { ClientsComponent } from "./clients/clients.component";
import { AddClientsComponent } from "./clients/add-clients/add-clients.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, EnquiryComponent, TrainersComponent, ClientsComponent, RouterOutlet, AddClientsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'InchessFitnessAdmin';
}
