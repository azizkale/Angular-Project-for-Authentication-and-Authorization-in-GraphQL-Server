import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-crudoperations',
  templateUrl: './crudoperations.component.html',
  styleUrls: ['./crudoperations.component.css'],
})
export class CrudoperationsComponent implements OnInit {
  users;
  currentUser;
  constructor(
    private router: Router,
    private myservice: MyserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.currentUser = params.get('currentUser');
    });
  }

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

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
