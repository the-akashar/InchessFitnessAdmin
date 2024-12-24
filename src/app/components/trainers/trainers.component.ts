import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TrainerService } from '../../services/trainer.service';
import { Trainer } from '../../common/trainer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,CommonModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss'
})
export class TrainersComponent implements OnInit {

  trainers:Trainer[]=[];

  constructor(private trainerService : TrainerService){

  }
  ngOnInit(): void {
    this.trainersList();
  }

  trainersList() {
    this.trainerService.getTrainersList().subscribe(
      data => {
        this.trainers = data;
      }
    )
  }


}
