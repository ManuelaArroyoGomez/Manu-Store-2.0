import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  activeMenu = false;
  counter = 0;

  constructor (
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }

  toogleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
