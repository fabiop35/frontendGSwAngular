import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  
   date = new Date();
   loginForm: FormGroup;
   submitted = false;
   loading = false;
   user: User = new User('', '');
   error: string = '';

   constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
     });

     if (this.authService.isAuthenticated()) {
       this.router.navigate(['/home']);
     }
   }

  ngOnInit() {
    /* this.loginForm = this.FormBuilder.group({
     username: ['', Validators.required],
     password: ['', Validators.required]
   }); */ 

  }

  get f() { 
      return this.loginForm.controls;
  }

  onSubmit() {
     this.submitted = true;
     // stop here if form is invalid
     if (this.loginForm.invalid) {
         return;
     }
     this.loading = true;
     
     this.user = new User(this.f['username'].value, this.f['password'].value);
     console.log( this.user );
     this.authService.login( this.user ).subscribe({
      /*next: (result) => console.log(result),
      error: (e) => console.error(e),
      complete: () => console.info('complete')*/
     next: (result: any) => {
        console.info("*Result: ", result);
        if (result['status'] === 'success') {
         this.authService.setCurrentUser(this.user);
          this.router.navigate(['/home']);
        } else {
          this.error = 'Wrong username password';
        }
      },
      error: (e) => {
        this.error = e;
        this.loading = false;
      },
      complete: () => console.info('complete')

    });
   }
}



