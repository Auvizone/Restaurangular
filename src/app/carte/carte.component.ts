import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

    dogs = [
      { race: 'Berger Allemand', name: 'Bob' },
      { race: 'Bulldog Francais', name: 'Leon'},
      { race: 'Caniche', name: 'Kiki' }
    ];

    temperatures = [0, 5, 35, -10];
  constructor() { }

  ngOnInit(): void {
  }

}
