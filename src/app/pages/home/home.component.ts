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
    this.weaponsService.getAllWeapons().subscribe({
      next: (result) => {
        this.weapons = result
      }
    })
  }

  addWeaponAtList(item: Weapons) {
    console.log(item)
    this.addAtCard.push(item);
    this.weaponsService.setWeapons(this.addAtCard);
  }
}
