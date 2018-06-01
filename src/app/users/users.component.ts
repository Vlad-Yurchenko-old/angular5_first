import {Component, OnInit} from '@angular/core';
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

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    console.log("(UsersComponent) Getting users list");
    this.userService.getUsers().subscribe(value => console.log(value));
    console.log("Users list :");
    console.log(this.users);
  }

}
