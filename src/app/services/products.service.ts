import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  products: Product[] = [
    {id: 1, name: 'Snickers', price: 4.00, image: '/assets/images/snickers.jpg', deal: {quantity: 5, priceOf: 3}},
    {id: 2, name: 'Popcorn', price: 3.00, image: '/assets/images/popcorn.jpeg'},
    {id: 3, name: 'Soda', price: 2.00, image: '/assets/images/soda1.jpg'}
  ];

  constructor() { }

  // This methods returns an observable of the products.
  getProducts(){
    return Observable.of(this.products);
  }

  // This methods a new product to the inventory
  addProduct(product: Product){
    // Increment products length and add it as id.
    product.id = this.products.length+1;
    // If no image is added, set default image path.
    if(!product.image){
      product.image = "/assets/images/default.jpg";
    }
    this.products.push(product);
  }

}
