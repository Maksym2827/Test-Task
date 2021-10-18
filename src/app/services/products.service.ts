import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/product.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) {  }

  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://api.thedogapi.com/v1/breeds?limit=8&page=0');
  }
}
