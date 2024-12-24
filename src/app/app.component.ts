import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnquiryComponent } from "./components/enquiry/enquiry.component";
import { TrainersComponent } from "./components/trainers/trainers.component";
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
