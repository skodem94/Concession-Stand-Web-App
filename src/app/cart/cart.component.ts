import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  orderTotal: number;

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this._cartService.getItems().subscribe(
      data => {
        this.cartItems = data;
      }
    )
    this._cartService.orderTotal.subscribe(
      data => {
        this.orderTotal = data;
      }
    )
  }

  // This method removes an item from the cart.
  removeItemFromCart(item: CartItem){
    this._cartService.removeItem(item);
  }

  // This method is called to clear the entire cart.
  clearCart(){
    this._cartService.clearItems();
  }

}
