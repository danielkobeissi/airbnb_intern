import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aventures',
  templateUrl: './aventures.component.html',
  styleUrls: ['./aventures.component.css']
})
export class AventuresComponent implements OnInit {
  @Input() image: string;
  @Input() country: string;

  constructor() { }

  ngOnInit() {
  }

}
