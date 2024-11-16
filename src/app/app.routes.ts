import { Routes } from '@angular/router';
import path from 'path';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientsComponent } from './clients/add-clients/add-clients.component';
import { AddTrainersComponent } from './trainers/add-trainers/add-trainers.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
        component:TrainersComponent,
        children:[
            
        ]
    },{
        path:'displayClients',
        component:ClientsComponent,
        children:[
            
        ]
    },
    {
        path:'displayTrainers/addTrainers',
        component:AddTrainersComponent
    },
    {
        path:'displayClients/addClients',
        component:AddClientsComponent 
    },
    {
        path:'**',
        component:NotFoundComponent
    }
    
];
