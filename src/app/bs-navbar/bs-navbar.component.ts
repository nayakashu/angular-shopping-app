import { AuthService } from './../common/services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(public auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
