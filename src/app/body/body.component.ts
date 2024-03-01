import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  explorers: any[];
  aventures: any[];
  logements1: any[];
  logements2: any[];
  experiences: any[];
  destinations: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.explorers = data.explorers;
      this.aventures = data.aventures;
      this.logements1 = data.logements1;
      this.logements2 = data.logements2;
      this.experiences = data.experiences;
      this.destinations = data.destinations;

    });
  }
}
