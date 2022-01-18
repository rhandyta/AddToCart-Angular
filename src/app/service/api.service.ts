import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  url = 'https://fakestoreapi.com/products/';
  getProducts() {
    return this.http.get<any>(this.url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
