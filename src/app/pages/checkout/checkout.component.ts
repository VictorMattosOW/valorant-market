import { Component, OnInit } from '@angular/core';
import { Weapons, WeaponsService } from 'src/app/services/weapons.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Weapons[] = []
  imgPath = '../../../assets/images/';

  constructor(private weaponsService: WeaponsService) {}

  total = 0
  ngOnInit(): void {
    this.weaponsService.getWeaponsAtCartObservable().subscribe({
      next: (cart) => {
        this.cart = cart;
      }
    })

    this.total = this.cart.reduce((total, weapon) => {
      return total+= weapon.price
    }, 0)
  }

}
