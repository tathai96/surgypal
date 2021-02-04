import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public details: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(public menu: MenuController) { }

  public toggle() {
    this.menu.toggle('slidingMenu');
  }
}
