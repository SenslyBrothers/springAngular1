import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthenticationRequestBody{
  userName : String,
	password : String	
}

export interface AuthenticationResponseBody{
  jwt :String
}

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }

  public generateToken(request):Observable<String>{
    return this.http.post<String>("http://localhost:8080/authenticate",request,{responseType:'test' as 'json'})
  }

  public welcome(token){
    let tokenStr = 'Bearer '+token;
    const headers = new HttpHeaders().set('Authorization',tokenStr);

    console.log(headers);
    
    return this.http.get<String>("http://localhost:8080/students",{headers, responseType: 'text' as 'json'});
  }
}
