import { Component, OnInit } from '@angular/core';
import {HardCodeAuthenticationService} from '../service/hard-code-authentication.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardcodedAuthenticationService
                : HardCodeAuthenticationService) { }

  ngOnInit() {
  }

}
