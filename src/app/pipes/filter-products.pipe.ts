import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], keyword: string): any[] {

    if (!products) return [];
    if (!keyword) return products;

    return products.filter(
      product => {
        return product.name.toLowerCase().includes(keyword.toLowerCase());
      });
  }
  
}
