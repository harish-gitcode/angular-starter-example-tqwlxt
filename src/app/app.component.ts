import { Component } from '@angular/core';
import { TransportService } from './transport.service';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  num = 0;
  word ="";
  cars: Car[];
  constructor(private ts: TransportService) {
    //here ts is the name we can change it to our liking
    this.cars = this.ts.getCars();
  }
  saySomething() {
    alert('Thanks for chosing this car');
  }
  increment() {
    this.num++;
  }
  reset() {
    this.num = 0;
  }
  print(){
    this.word+="Printing.....";
  }
}
