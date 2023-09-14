import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() name: string = ''
  @Input() price: number = 0
  @Input() img: string = ''
  @Input() color: string = ''
  @Input() selected: boolean = false;
  @Output() handleAddWeaponAtCart = new EventEmitter<void>();
  @Output() handleRemoveWeaponAtCart = new EventEmitter<void>();

  
  imgPath = '../../../assets/images/';
}
