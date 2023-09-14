import { Component, OnInit } from '@angular/core';
import { Weapons, WeaponsService } from 'src/app/services/weapons.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: number = 0;

  constructor(private weaponsService: WeaponsService) {}


  ngOnInit(): void {
    this.weaponsService.getWeaponsAtCartObservable().subscribe({
      next: (weapons: Weapons[]) => {
        this.cart = weapons.length;
      }
    })
  }
}
