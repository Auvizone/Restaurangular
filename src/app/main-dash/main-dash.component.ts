import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../models/food.interface';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})

export class MainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [ // FOR MOBILE
        { title: 'Burger', cols: 2, rows: 1, id: 'brg' },
        { title: 'Pizzas', cols: 2, rows: 1, id: 'pzz' },
        { title: 'Crepes', cols: 2, rows: 1, id: 'crp' }
        ];
      }

      return [ // FOR DESKTOP
        { title: 'Burger', cols: 2, rows: 1, id: 'brg' },
        { title: 'Pizzas', cols: 2, rows: 1, id: 'pzz' },
        { title: 'Crepes', cols: 2, rows: 1, id: 'crp' }
      ];
    })
  );


    burgers: Food[];
    pizzas: Food[];
    crepes: Food[];
    

  constructor(private breakpointObserver: BreakpointObserver, private qls: QuickLunchService) {}


  ngOnInit() {
    this.burgers = this.qls.getBurgers();
    this.pizzas = this.qls.getPizzas();
    this.crepes = this.qls.getCrepes();
  }

}
