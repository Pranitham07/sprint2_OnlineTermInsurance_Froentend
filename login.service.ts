import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL ="http://localhost:9091/api/policy/allpolicies";
  constructor(private httpClient: HttpClient) { }

  
}
