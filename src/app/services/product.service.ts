import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl = "http://localhost:8000/api/v1/products";
  constructor( private _httpClient: HttpClient) { }

  getProductLists():Observable<any[]>{
    return this._httpClient.get<any[]>(`${this.apiurl}`)
  }
}