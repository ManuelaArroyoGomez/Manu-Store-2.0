import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model'
import { CommonModule } from '@angular/common'

import { AppComponent } from './../../app.component'
import { ImgComponent } from "../img/img.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AppComponent, ImgComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    name: '',
    price: 0,
    image: ''
  };
}
