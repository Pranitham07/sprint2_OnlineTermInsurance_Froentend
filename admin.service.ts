import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseURL = "http://localhost:9091/api/admin/admin/login/1/nulvkC456";

  constructor(private httpClient: HttpClient) { }
  getAdminsList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`$(this.baseURL}`);
  }
}
