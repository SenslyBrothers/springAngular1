import { Component, OnInit } from '@angular/core';
import { AuthenticateService,AuthenticationRequestBody} from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  abody : AuthenticationRequestBody;

  constructor(private authenticationService: AuthenticateService) { }

  ngOnInit(): void {
  }

  login(){
    const password = "foo";
    const userName = "foo"; 
    this.abody={userName,password};

    console.log(this.abody);
    

    this.authenticationService.login(this.abody).subscribe(res=>{
      console.log(res);
      
    },error=>{
      console.log(error);
      
    })
  }

}
