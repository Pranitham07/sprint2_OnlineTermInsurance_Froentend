import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Payment } from '../_Models/payment.model';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  addPayURL : string;
  getPayURL : string;
  updatePayURL : string;
 deletePayURL : string;
  //private _baseUrl:string="http://localhost:9091/api/payment";

  constructor(private http:HttpClient) {
    this.addPayURL="http://localhost:9091/api/payments";
    
    this.getPayURL="http://localhost:9091/api/payments";
    
    this.updatePayURL="http://localhost:9091/api/payments";
    
    this.deletePayURL="http://localhost:9091/api/payments";
    
       }
      
      addPayment(a:Payment):Observable<Payment>{
        return this.http.post<Payment>(this.addPayURL,a);
      }
      getAllPayment():Observable<Payment[]>{
        return this.http.get<Payment[]>(this.getPayURL);
      }
      
      updatePayment(a:Payment):Observable<Payment>{
        return this.http.put<Payment>(this.updatePayURL,a);
    }
    deletePayment(a:Payment):Observable<Payment>{
    
      return this.http.delete<Payment>(this.deletePayURL+'/'+a.paymentId);
     
    }
  }