import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  text = 'Marvellous Infosystems Pune';
  capitalCount: number = 0;

  constructor(private stringService: StringService) {
    this.capitalCount = this.stringService.CountCapital(this.text);

  }

}
