import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Product } from '../class/product';

@Component({
  selector: 'app-display-comp',
  templateUrl: './display-comp.component.html',
  styleUrls: ['./display-comp.component.css']
})
export class DisplayCompComponent implements OnInit {

  displayToken:string;
  product:Product[];
  constructor(private router:Router,private _authService:AuthServiceService) { }

  ngOnInit() {
    this.displayToken=this._authService.AccessToken;

    this._authService.getProducts().subscribe((data)=>{
      this.product=data;
    })
  }

}
