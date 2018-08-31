import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers,Http,HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import {TokenParams} from './class/Tokenparam';
import { Product } from './class/product';

@Injectable()
export class AuthServiceService {

  AccessToken:string='';
  constructor(private _http:Http) { }

  private TokenApi='http://localhost:57354/Token';
  private ProductsAPI='http://localhost:57354/api/products';

  login(Username:string,Password:string):Observable<TokenParams>{
    var headersForTokenAPI=new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    var data="grant_type=username&password="+Username+"&password="+Password;
    return this._http.post(this.TokenApi,data,{headers:headersForTokenAPI})
         .map(res=>res.json());
  }

  getProducts():Observable<Product[]>{
    var HeadersForProductsAPI=new Headers();
    if(this.AccessToken){
      HeadersForProductsAPI.append('Authorization','Bearer '+ this.AccessToken);
    }
    return this._http.get(this.ProductsAPI,{headers:HeadersForProductsAPI})
        .map(res=>res.json());
  }

}
