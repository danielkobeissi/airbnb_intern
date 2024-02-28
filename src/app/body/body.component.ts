import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // explorer
  Item1 = 'Logements';
  explorer1 = '../../../src/images/explorer1.jpg';
  Item2 = 'Experience';
  explorer2 = '../../../src/images/explorer2.jpg';
  Item3 = 'Aventures';
  explorer3 = '../../../src/images/explorer3.jpg';

  //aventure
  aventure1 = '../../../src/images/aventure1.jpg';
  country1 = 'CAYMAN ISLANDS';
  aventure2 = '../../../src/images/aventure2.jpg';
  country2 = 'URUGUAY';
  aventure3 = '../../../src/images/aventure3.jpg';
  country3 = 'ICELAND';
  aventure4 = '../../../src/images/aventure4.jpg';
  country4 = 'MONGOLIA';
  aventure5 = '../../../src/images/aventure5.jpg';
  country5 = 'BAHRAIN';
  aventure6 = '../../../src/images/aventure6.jpg';
  country6 = 'BOSNIA AND HERZEGOVINA';

  //logement
  logement1 = '../../../src/images/log1.jpg';
  logement2 = '../../../src/images/log2.jpg';
  logement3 = '../../../src/images/log3.jpg';
  logement4 = '../../../src/images/log4.jpg';
  logement5 = '../../../src/images/log5.jpg';
  logement6 = '../../../src/images/log6.jpg';
  logement7 = '../../../src/images/log7.jpg';
  logement8 = '../../../src/images/log8.jpg';
  mount1 = 'Toledo';
  mount2 = 'Mesa';
  mount3 = 'Utica';
  mount4 = 'South Bend';

  //experience
  experience1 = '../../../src/images/exp1.jpg';
  experience2 = '../../../src/images/exp2.jpg';
  experience3 = '../../../src/images/exp3.jpg';
  experience4 = '../../../src/images/exp4.jpg';
  experience5 = '../../../src/images/exp5.jpg';
  experience6 = '../../../src/images/exp6.jpg'

  //destination
  destination1 = '../../../src/images/dest1.jpg';
  destination2 = '../../../src/images/dest2.jpg';
  destination3 = '../../../src/images/dest3.jpg';

  ngOnInit(): void {
  }



}
