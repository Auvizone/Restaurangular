import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  numberToDisplay ='';

    standard = {
      firstName: 'Benji',
      lastName: 'Glouton',
      role: 'Acceuil',
      award: '',
      phoneNumber: '02-57-37-58-27'
    };

    sommelier = {
      firstName: 'Shaun',
      lastName: 'Pegg',
      role: 'Sommelier',
      award: 'Meilleur Sommelier de France 2002',
      phoneNumber: '02-54-12-53-78'
    };

    boucher = {
      firstName: 'Nick',
      lastName: 'Froid',
      role: 'Boucher',
      award: 'Meilleur Boucher de France 2016',
      phoneNumber: '02-57-37-58-90'
    };

  constructor() { }

  ngOnInit(): void {
  }

  displayBig(telephoneNumber) {
    console.log(telephoneNumber);
    this.numberToDisplay = telephoneNumber;
  }
}
