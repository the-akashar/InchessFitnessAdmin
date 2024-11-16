import { Routes } from '@angular/router';
import path from 'path';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientsComponent } from './clients/add-clients/add-clients.component';
import { AddTrainersComponent } from './trainers/add-trainers/add-trainers.component';

export const routes: Routes = [
    {
        path:'',
        component:DashboardComponent
    },
    {
        path:'displayDashboard',
        component:DashboardComponent
    },{
        path:'displayEnquiry',
        component:EnquiryComponent
    },{
        path:'displayTrainers',
        component:TrainersComponent
    },{
        path:'displayClients',
        component:ClientsComponent
    },
    {
        path:'addClients',
        component:AddClientsComponent 
    },
    {
        path:'addTrainers',
        component:AddTrainersComponent
    }
];
