import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'invalidCredentiel';
  errorLogin = false;
  constructor() { }

  ngOnInit() {
  }
  handleLogin() {
    console.log (this.username, this.password);
    if (this.username === 'nouha' && this.password === 'nouha') {
      this.errorLogin = false;
    } else { this.errorLogin = true; }
  }
}
