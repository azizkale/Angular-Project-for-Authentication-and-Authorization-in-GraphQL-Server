import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private myservice: MyserviceService) {}

  ngOnInit(): void {}
  login(username, password) {
    this.myservice.login(username, password).subscribe((data) => {
      localStorage.setItem('token', data.data.login);
      if (data.data.login !== 'unknown user') {
        this.router.navigate(['/crud'], {
          queryParams: { currentUser: username },
        });
      }
    });
  }
}
