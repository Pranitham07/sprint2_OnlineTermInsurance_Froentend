import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OTIWebApp';
  constructor(private router: Router) {

  }

  successFw() {
    console.log('success popup with forward page');
    this.router.navigateByUrl('result');
  }

  successNoFw() {
    console.log('success popup without forward page');
  }

  errorMsg() {
    console.log('error popup');
  }
}
