import { Component, OnInit } from '@angular/core';
import {TokenParams} from '../class/Tokenparam';
import {Router} from '@angular/router'
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  tokenParam:TokenParams;
  username:string;
  password:string;

  constructor(private router:Router,private auth:AuthServiceService) { }

  ngOnInit() {
  }

   doLogin():void{
      this.auth.login(this.username,this.password)
          .subscribe((data)=>{
            this.tokenParam=data;
            this.auth.AccessToken=this.tokenParam.access_token;
            this.router.navigate(['/display_data']);
          })
  }
}
