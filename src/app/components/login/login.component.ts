import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: String;
  password: String;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  loginAction(): void {
    this.loginService.login(this.login, this.password).subscribe(value => {
      window.localStorage.setItem("token", value['token']);
      console.log(value['token']);
      this.router.navigate(['/cv/list'])
    });
  }

}
