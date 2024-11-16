import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-add-trainers',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './add-trainers.component.html',
  styleUrl: './add-trainers.component.scss'
})
export class AddTrainersComponent {

}
