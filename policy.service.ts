import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Policy } from './policy';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private baseURL ="http://localhost:9091/api/policy/allpolicies";
  constructor(private httpClient: HttpClient) { }

  getPolicyList(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.baseURL}`);
  }
}
