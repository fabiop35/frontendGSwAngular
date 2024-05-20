import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  posts: any[] = [];

  constructor(public  authService: AuthService,
              public router: Router,
              private postService: PostService
             ){

  }

  logout() {
   this.authService.logout();
   this.router.navigate(['']);
  }

  ngOnInit() {
   this.getPosts();
  }
 
  getPosts() {
    this.postService.getAllPost().subscribe({
      next: (result: any) => {
        this.posts = result['data'];
        console.log( this.posts );
      }
    });
  }

}
