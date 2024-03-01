import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  @Input() image: string;
  @Input() destination = [];

  constructor() { }

  ngOnInit() {
  }

}
