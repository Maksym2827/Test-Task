import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { IProduct } from "../../interfaces/product.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  public products: IProduct[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res: IProduct[]) => this.products = res);
  }

}
