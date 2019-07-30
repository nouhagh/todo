import { Component, OnInit } from '@angular/core';
import {HardCodeAuthenticationService} from '../service/hard-code-authentication.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private hardcodedAuthenticationService
                 : HardCodeAuthenticationService  ) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}
