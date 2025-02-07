import { Component, Input, OnInit, inject } from '@angular/core';
import { BlogPost } from '../blog-post.interface';
import { BlogService } from '../blog.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  post: BlogPost = {
    id: 0,
    title: 'Not Found',
    content: 'This post does not exist.',
    dateCreated: new Date(),
    snippet: 'No details available.',
    tags: [],
    comments: [],
    userId: 0,
  };

  private blogService = inject(BlogService);

  ngOnInit(): void {
    // const postId = Number(this.id);
    // this.post = this.blogService.getPostById(postId);
  }
}
