import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs'

export interface Weapons {
  type: string
  price: number
  name: string
  img: string
  selected: boolean
}

@Injectable({
  providedIn: 'root'
})

export class WeaponsService {

  url = '../../../assets/valorantSkins.json';

  private cart = new BehaviorSubject<Weapons[]>([]);
  private weapons = new BehaviorSubject<Weapons[]>([]);


  constructor(private http: HttpClient) { }

  getAllWeapons(): Observable<Weapons[]> {
    return this.http.get<Weapons[]>(this.url).pipe(
      map(weapon => weapon.map(w => {
        return w = {
          ...w,
          selected: false
        }
      }))
    )
  }

  getWeaponsAtCartObservable(): Observable<Weapons[]> {
    return this.cart.asObservable();
  }

  setWeaponsAtCart(weapon: Weapons[]): void {
    this.cart.next(weapon);
  }

  setWeapons(weapon: Weapons[]): void {
    this.weapons.next(weapon);
  }

  getWeaponsObservable(): Observable<Weapons[]> {
    return this.weapons.asObservable();
  }

}
