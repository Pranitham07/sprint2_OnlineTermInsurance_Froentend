import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Policy } from './userpolicydetails';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  UpdatePolicy(policy: Policy) {
    throw new Error('Method not implemented.');
  }
  
  getPoliciesList() {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:9091/api/UserPolicy/getAllUserPolicies";
  constructor(private httpClient: HttpClient) { }

  getPolicyList(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.baseURL}`);
  }
  createPolicy(policy: Policy): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, policy);
    
  }
  getPolicyById(id: number): Observable<Policy>{
    return this.httpClient.get<Policy>(`${this.baseURL}/${id}`);
  } 
  updatePolicy(id:number, policy: Policy): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,policy);
  }
  deletePolicy(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
