import {Component, OnInit, Input} from '@angular/core';

import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  save() {
    this.userService.updateUser(this.user);
    this.user = null;
  }

}
