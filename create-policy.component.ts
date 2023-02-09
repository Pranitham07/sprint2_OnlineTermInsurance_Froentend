import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../userpolicydetails';
import { PolicyService } from '../userpolicydetails.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {

  policy: Policy = new Policy();
  savePolicy: any;
  constructor(private policyService: PolicyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.policyService.createPolicy(this.policy).subscribe((data: any) =>{
      console.log(data);
      this.goToPolicyList();
    },
      (     error: any) => console.log(error));
  }

  goToPolicyList(){
    this.router.navigate(['/policy']);
  }

  onSubmit(){
    console.log(this.policy);
    this.savePolicy();

  }

}
