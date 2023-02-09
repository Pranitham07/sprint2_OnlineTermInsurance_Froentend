import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL="http://localhost:9091/api/users";

 

  constructor(private httpClient : HttpClient) { }



  getUsersList(): Observable<User[]>{

 return this.httpClient.get<User[]>(`${this.baseURL}`);

  }

   }

