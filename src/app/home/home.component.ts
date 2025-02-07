import { Component, inject, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post.interface';
import { BlogService } from '../blog.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  private blogService = inject(BlogService);
  private router = inject(Router);

  navigateToPost(id: number): void {
    this.router.navigate(['/post', id]);
  }

  ngOnInit(): void {
    this.blogPosts = this.blogService.getPosts();
  }
}
