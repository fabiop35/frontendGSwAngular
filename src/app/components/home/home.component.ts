import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public  authService: AuthService,
                public router: Router){

  }

  logout() {
   this.authService.logout();
   this.router.navigate(['']);
  }

}
