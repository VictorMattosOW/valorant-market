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
  @Output() handleBuyWeapon = new EventEmitter<void>();
  
  imgPath = '../../../assets/images/';
  formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
