import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(input: string): number {
    const capitalLetters = input.match(/[A-Z]/g);
    return capitalLetters ? capitalLetters.length : 0;
  }
}
