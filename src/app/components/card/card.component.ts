import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() animal!: Animal;
}

export interface Animal {
  id:string,
  type: string,
  name: string,
  photo: string,
  age: string,
  gender: string,
  breed: string,
  neutered: string,
  adopted:boolean,
}
