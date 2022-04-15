import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subaru: Car = {
    company: 'Subaru',
    model: 'Outback',
    miles: 58232,
    premium: false,
  };
  honda: Car = {
    company: 'Honda',
    model: 'Accord',
    miles: 39393,
    premium: true,
  };
  bmw: Car = { company: 'BMW', model: 'X3', miles: 4400 };
  cars: Car[] = [this.subaru, this.honda, this.bmw];
}
