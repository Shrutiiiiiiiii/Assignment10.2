import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {


  number = 29;
  isPrime: boolean = false;

  constructor(private numberService: NumberService) {
    this.isPrime = this.numberService.ChkPrime(this.number);

  }
}
