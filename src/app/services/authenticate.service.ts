import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationRequestBody, AuthenticationResponseBody } from './jwt-client.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  private url="http://localhost:8080/authenticate"; 


  constructor(private http:HttpClient) { }


  login(body:AuthenticationRequestBody):Observable<AuthenticationResponseBody>{

    console.log(body.password+" this the service");
    
    return this.http.post<AuthenticationResponseBody>(`${this.url}`,body);
  }



}
