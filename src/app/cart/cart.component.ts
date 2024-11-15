import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  productList:any;
  productListOnly:any;
  constructor(private productservice:ProductService){}
  ngOnInit() {
    this.productservice.getProductLists().subscribe((data: any[]) => {      
      this.productList = data;
      this.productListOnly = this.productList.products;
      console.log(this.productListOnly,"data")
    });
  }
}
