import {Component, OnInit} from '@angular/core';

import {UserDetailsComponent} from '../user-details/user-details.component';

import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user_title = 'Users List';

  users: User[];
  currentUser: User;


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => {
      console.log(value);
      this.users = value['result'];
    });
  }

  rowClick(user: User) {
    this.currentUser = user;
  }

}
