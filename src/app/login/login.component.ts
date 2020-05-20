import { Component, OnInit } from '@angular/core';
import { AuthenticationRequestBody, JwtClientService, AuthenticationResponseBody } from '../services/jwt-client.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  abody : AuthenticationRequestBody;
  response:any;

  constructor(private jwtService:JwtClientService ) { }

  ngOnInit(): void {
    this.getAccessToken();
  }

  public getAccessToken(){
    const password = "foo";
    const userName = "foo"; 
    this.abody={userName,password};

    console.log(this.abody);
    
    this.jwtService.generateToken(this.abody).subscribe(res=>{
      console.log(res);
      
           
      this.accessApi(res);

    })
  }

  public accessApi(token){
    this.response=this.jwtService.welcome(token).subscribe(res=>{
      console.log(res);
      
    })
  }

 

}
