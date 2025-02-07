import { Component, OnInit, inject } from '@angular/core';
import { BlogPost } from '../blog-post.interface';
import { BlogService } from '../blog.service';
import { DatePipe } from '@angular/common';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css',
})
export class PostCommentsComponent implements OnInit {
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

  @Input() id: number = -1;
  private blogService = inject(BlogService);

  ngOnInit(): void {
    const postId = Number(this.id);
    this.post = this.blogService.getPostById(postId);
  }
}
