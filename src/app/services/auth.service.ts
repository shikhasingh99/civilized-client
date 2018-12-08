
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
	domain="http://localhost:8080/";	
  constructor(
  private http:Http
  ) { }
  registerUser(user){
  //return this.http.post(this.domain+'/authentication/register', 1).map(res=>res.json());
  }
}
