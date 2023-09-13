import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

export interface Weapons {
  type: string
  price: number
  name: string
  img: string
}

@Injectable({
  providedIn: 'root'
})

export class WeaponsService {

  url = '../../../assets/valorantSkins.json';

  private cart = new BehaviorSubject<Weapons[]>([]);

  constructor(private http: HttpClient) { }

  getAllWeapons(): Observable<Weapons[]> {
    return this.http.get<Weapons[]>(this.url)
  }

  setWeapons(weapon: Weapons[]): void {
    this.cart.next(weapon);
  }

  getWeaponsObservable(): Observable<Weapons[]> {
    return this.cart.asObservable();
  }

}
