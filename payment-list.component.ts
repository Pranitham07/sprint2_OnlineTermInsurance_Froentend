import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/_Models/payment.model';

import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { PaymentService } from 'src/app/_Services/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  paymentDetails !: FormGroup;
  paymentList?:Payment[]=[];
  paymentObj:Payment=new Payment();
  constructor(private formBuilder:FormBuilder,private payService:PaymentService) { }
  ngOnInit(): void {
    //this.loadData();
   this.getAllPayment();

    this.paymentDetails=this.formBuilder.group({
      paymentId : [''],
      emailId : [''],
      applicationId : [''],
      paymentDescription : [''],
      paymentDate : [''],
      paymentStatus : [''],
      paymentAmount : ['']
    });
  }
  addPayment(){
    console.log(this.paymentDetails);
    this.paymentObj.paymentId=this.paymentDetails.value.paymentId;
    this.paymentObj.emailId=this.paymentDetails.value.emailId;
    this.paymentObj.applicationId=this.paymentDetails.value.applicationId;
    this.paymentObj.paymentDescription=this.paymentDetails.value.paymentDescription;
    this.paymentObj.paymentDate=this.paymentDetails.value.paymentDate;
    this.paymentObj.paymentStatus=this.paymentDetails.value.paymentStatus;
    this.paymentObj.paymentAmount=this.paymentDetails.value.paymentAmount;

    this.payService.addPayment(this.paymentObj).subscribe({
      next:(res:any)=>{
        this.addPayment();
      },error:(err:any)=>{
      console.log(err);
      }
    });
  }
  
    getAllPayment(){
      this.payService.getAllPayment().subscribe({
        next:(res:any)=>{
          //this.getAllPayment();
          this.paymentList=res;
        },error:(err:any)=>{
        console.log(err);
        }
      });
    }
    editPayment(pay:Payment){
      this.paymentDetails.controls['paymentId'].setValue(pay.paymentId);
      this.paymentDetails.controls['emailId'].setValue(pay.emailId);
      this.paymentDetails.controls['applicationId'].setValue(pay.applicationId);
      
      this.paymentDetails.controls['paymentDescription'].setValue(pay.paymentDescription);
      this.paymentDetails.controls['paymentDate'].setValue(pay.paymentDate);
      
      this.paymentDetails.controls['paymentStatus'].setValue(pay.paymentStatus);
      this.paymentDetails.controls['paymentAmount'].setValue(pay.paymentAmount);
    }
    updatePayment(){
    this.paymentObj.paymentId=this.paymentDetails.value.paymentId;
    this.paymentObj.emailId=this.paymentDetails.value.emailId;
    this.paymentObj.applicationId=this.paymentDetails.value.applicationId;
    this.paymentObj.paymentDescription=this.paymentDetails.value.paymentDescription;
    this.paymentObj.paymentDate=this.paymentDetails.value.paymentDate;
    this.paymentObj.paymentStatus=this.paymentDetails.value.paymentStatus;
    this.paymentObj.paymentAmount=this.paymentDetails.value.paymentAmount;

      
      this.payService.updatePayment(this.paymentObj).subscribe({
        next:(res:any)=>{
        console.log(res);
        this.updatePayment();
        },error:(err:any)=>{
        console.log(err);
        }
      });
    }
    deletePayment(a:Payment){

      this.payService.deletePayment(a).subscribe({
  
        next:(res:any)=>{
  
          console.log(res);
  
          alert('Payment deleted successfullly');
  
          this.getAllPayment();
  
      },
  
      error:(err:any)=>{
  
        console.log(err);
  
      }
  
    });
  
  }
  }

