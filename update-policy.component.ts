import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../userpolicydetails';
import { PolicyService } from '../userpolicydetails.service';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {

  policy: Policy = new Policy();
  id: any;
  constructor(private policyService: PolicyService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.policyService.getPolicyById(this.id).subscribe(data => {
      this.policy = data;
    },error => console.log(error));
  }
  onSubmit(){
    // this.policyService.updatePolicy(this.id,this.policy).subscribe(data =>{

    }

  }
  // goToPolicyList(){
  //   this.router.navigate(['/policy']);
  // }

  

