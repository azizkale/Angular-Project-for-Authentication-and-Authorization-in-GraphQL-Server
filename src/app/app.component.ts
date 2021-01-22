import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users = [];
  currentUser;

  constructor(private myservice: MyserviceService) {}

  ngOnInit(): void {}

  getUsers() {
    this.users = [];
    this.myservice.getUsers().subscribe((data) => {
      data.data.users.map((u) => {
        this.users.push(u);
      });
    });
  }

  addUser(username: string, city: string) {
    this.users = [];
    const id: any = '5';
    this.myservice.addUser(id, username, city).subscribe((data) => {
      data.data.addUser.map((user) => {
        this.users.push(user);
      });
    });
  }

  login(username, password) {
    this.myservice.login(username, password).subscribe((data) => {
      localStorage.setItem('token', data.data.login);
      if (data.data.login !== 'unknown user') {
        this.currentUser = username;
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
    window.location.reload();
  }
}
