import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss'
})
export class TrainersComponent {

}
