import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model'
import { CommonModule } from '@angular/common'

import { TimeAgoPipe } from '../../pipe/time-ago.pipe';
import { AppComponent } from './../../app.component'
import { ImgComponent } from "../img/img.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AppComponent, ImgComponent, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  today = new Date();

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    // description: '',
    // category: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}
