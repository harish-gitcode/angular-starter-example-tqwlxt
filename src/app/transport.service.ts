import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class TransportService {
  // this is where we will recreate our array of Car types
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

  constructor() {}
  getCars() {
    return this.cars;
  }

  // this is where we will write methods to export our Car array
}
