import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';

@Injectable()
export class CartService {

  cartItems: CartItem[] = [];
  orderTotal: any = new BehaviorSubject<number>(0);

  constructor() { }

  // The method returns the observable of cartItems.
  getItems() {
    return Observable.of(this.cartItems);
  }

  // This method is used to add an item to the cart.
  addItem(product: Product, quantity: number) {
    // Check if the product is already in the cart, if true update it else add it it.
    if(this.cartItems.findIndex(item => item.product == product) != -1){
      this.updateItem(product, quantity);
    }else{
      let cost: number = this.calculateTotalCost(product, quantity);
      // Add cost to orderTotal
      this.orderTotal.next(this.orderTotal.getValue() + cost);
      this.cartItems.push({product: product, quantity: quantity, cost: cost});
    }
  }

  // This method is used to update the quantity and cost of the item in the cart.
  updateItem(product: Product, quantity: number){
    let itemIndex = this.cartItems.findIndex(item => item.product == product);
    let cost: number = this.calculateTotalCost(product, this.cartItems[itemIndex].quantity+quantity);
    // Add cost to orderTotal
    this.orderTotal.next(this.orderTotal.getValue() - this.cartItems[itemIndex].cost + cost);
    this.cartItems[itemIndex] = {product: product, quantity: this.cartItems[itemIndex].quantity+quantity, cost: cost}
  }

  // This method is used to calculate the item cost based on the product price, quanitity and deal (if any).
  calculateTotalCost(product: Product, quantity: number){
    if(product.deal && (quantity >= product.deal.quantity)){
        return ((Math.floor(quantity/product.deal.quantity)*product.deal.priceOf*product.price)+((quantity%product.deal.quantity)*product.price));
    }else{
      return quantity*product.price;
    }
  }

  // Remove item from cart and update the order total
  removeItem(item: CartItem){
    let itemIndex = this.cartItems.indexOf(item);
    this.cartItems.splice(itemIndex, 1);
    this.orderTotal.next(this.orderTotal.getValue()-item.cost);
  }

  // This method removes all the items in the cart.
  clearItems() {
    this.cartItems.splice(0);
    this.orderTotal.next(0);
  }

}
