import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardCodeAuthenticationService} from '../service/hard-code-authentication.service';

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
  constructor( private router: Router,
               private hardcodedAuthenticationService: HardCodeAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin() {
    console.log (this.username, this.password);
   if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
     this.router.navigate(['welcome', this.username]);
     this.errorLogin  = false;
   } else {
     this.errorLogin  = true;
   }
  }
}
