import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;

  constructor(private _productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    // Initilizing product object to bind values in the template.
    this.product = new Product();
  }

  // This method adds a new product to the inventory
  addProduct(){
    this._productsService.addProduct(this.product);
    // Routing user back to home after adding the product.
    this.router.navigate(["/home"]);
  }

}
