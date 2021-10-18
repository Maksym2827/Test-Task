import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";
import { IProduct } from "../../interfaces/product.interface";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      800: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: true
  }

  @Input() product: IProduct;

  products: IProduct[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res: IProduct[]) => this.products = res);
  }

}
