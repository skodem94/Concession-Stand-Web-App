import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private _productsService: ProductsService, private _cartService: CartService) { }

  ngOnInit() {
    // This gets all the products present.
    this._productsService.getProducts().subscribe( data => this.products = data);
  }

  // This method adds an item to the cart.
  addToCart(product: Product, quantity: any){
    this._cartService.addItem(product, parseInt(quantity));
  }

}
