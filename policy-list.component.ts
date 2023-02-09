import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../userpolicydetails';
import { PolicyService } from '../userpolicydetails.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  policy?: Policy[]

constructor(private policyService:PolicyService,
  private router: Router) { }

  ngOnInit(): void {
    this.getPolicy();
    
  }
  private getPolicy(){
    this.policyService.getPolicyList().subscribe(data => {
      this.policy = data;
    });
  }
  
  updatePolicy(id: number){
    this.router.navigate(['update-policy',id]);
  }
  deletePolicy(id: number){
    this.policyService.deletePolicy(id).subscribe( data => {
      console.log(data);
      this.getPolicy();

    })
  }

  
}
  
    

  


