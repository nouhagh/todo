import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodeAuthenticationService {

  constructor() { }
  authenticate(username, password) {
    if ( username === 'nouha' && password === 'nouha') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }
}
