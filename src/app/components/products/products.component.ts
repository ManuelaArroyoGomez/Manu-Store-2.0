import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

import { Product } from '../../models/product.model'
import { ProductComponent } from "../product/product.component";
import { ProductsService } from '../../services/products.service';

import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total = 0;

  // products: Product[] = []

  products: Product[] = [
    {
      id: '1',
      title: 'Top Bandeau',
      // description: 'Top estilo Bandeau de manga larga, de material transparente y ajustado. El diseño es sin hombros, lo que le da un toque atrevido y moderno, con las mangas hechas del mismo tejido translúcido. El color es un tono caqui oscuro con un patrón sutil que parece camuflaje, lo que añade un elemento interesante al diseño. El top es corto, terminando justo por encima de la cintura.',
      price: 70,
      image: 'assets/images/product1.jpg',
      // description: '',
      // category: ''
    },
    {
      id: '2',
      title: 'Falda Caqui',
      // description: 'Falda Beige de estilo mini con pliegues amplios, lo que le da un aspecto ligeramente plisado. Es de color caqui, con un corte recto en la cintura, lo que la hace ajustada en esa zona. El diseño es sencillo y casual, adecuado para un look urbano o informal. La longitud es corta, por encima de la rodilla, lo que le aporta un estilo juvenil y moderno.',
      price: 80,
      image: 'assets/images/product2.jpg',
      // description: '',
      // category: ''
    },
    {
      id: '3',
      title: 'Mini Falda',
      // description: 'Mini falda de color gris oscuro con un diseño ajustado y moderno. Tiene aberturas en los costados que se destacan por los detalles de cordones ajustables, permitiendo personalizar el ancho de la abertura lateral. El largo de la falda es corto, por encima de la rodilla, y se ajusta a la cintura, resaltando la figura.',
      price: 100,
      image: 'assets/images/product3.jpg',
      // description: '',
      // category: ''
    },
    {
      id: '4',
      title: 'Conjunto: Blusa y falda',
      price: 200,
      image: 'assets/images/product4.jpg',
      // description: '',
      // category: ''
    },
    {
      id: '5',
      title: 'Conjunto: Falda y Botas',
      price: 260,
      image: 'assets/images/product5.jpg',
      // description: '',
      // category: ''
    },
    {
      id: '6',
      title: 'Pantalon',
      price: 120,
      image: 'assets/images/product6.jpg',
      // description: '',
      // category: ''
    },
    {
      id: '7',
      title: 'Conjuto',
      price: 200,
      image: 'assets/images/product7.jpg',
      // description: '',
      // category: ''
    },
    {
      id: '8',
      title: 'Blusa',
      price: 60,
      image: 'assets/images/product8.jpg',
      // description: '',
      // category: ''
    }
  ];

  constructor(
    private storeService: StoreService,
    // private productService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  // ngOnInit(): void {
  //   this.productService.getAllProducts()
  //   .subscribe(data => {
  //     this.products = data;
  //   })
  // }

  onAddToShoppingCart(product: Product) {
    // this.myShoppingCart.push(product);
    this.storeService.addProduct(product);
    // this.total = this.myShoppingCart.reduce((sum, ClipboardItem) => sum + ClipboardItem.price, 0);
    this.total = this.storeService.getTotal();
  }
}
