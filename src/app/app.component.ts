import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from "./components/img/img.component";
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "./components/product/product.component";

import { CommonModule } from '@angular/common';

import { Product } from './models/product.model'
import { ProductsComponent } from "./components/products/products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImgComponent, FormsModule, ProductComponent, CommonModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgParent = '';
  showImg = true;

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toogleImg() {
    this.showImg = !this.showImg;
  }

}
