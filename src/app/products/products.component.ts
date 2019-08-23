import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cart: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getAllItems().subscribe(response => 
      (this.cart = response)
    )};

}
