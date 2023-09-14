import { Component, OnInit } from '@angular/core'
import { Weapons, WeaponsService } from 'src/app/services/weapons.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  weapons: Weapons[] = [];

  addAtCard: Weapons[] = [];
  
  constructor(private weaponsService: WeaponsService) {
  }

  ngOnInit(): void {
    this.getWeaponsAddedAtCart()
  }

  getWeaponsAddedAtCart() {
    this.weaponsService.getWeaponsObservable().subscribe({
      next: (result) => {
        result.length === 0 ? this.getWeapons() : this.weapons = result
      }
    })

    this.weaponsService.getWeaponsAtCartObservable().subscribe({
      next: (cart) => {
        this.addAtCard = cart;
      }
    })
  }

  getWeapons() {
    this.weaponsService.getAllWeapons().subscribe({
      next: (result) => {
        this.weapons = result
      }
    })
  }

  addWeaponAtList(item: Weapons) {
    this.weapons.map(w => w === item ? w.selected = true : w)
    this.addAtCard.push(item);
    this.weaponsService.setWeapons(this.weapons);
    this.weaponsService.setWeaponsAtCart(this.addAtCard);
  }

  removeWeaponAtList(itemToDelete: Weapons) {
    this.weapons.map(w => w === itemToDelete ? w.selected = false : w)
    this.addAtCard = this.addAtCard.filter(w => w !== itemToDelete)
    this.weaponsService.setWeaponsAtCart(this.addAtCard);
  }
}
