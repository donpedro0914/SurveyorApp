import { Component } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent {

  text: string;

  constructor() {
    console.log('Hello AccordionComponent Component');
    this.text = 'Hello World';
  }

}
