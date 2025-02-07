import { Component, OnInit, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogPost, User } from '../blog-post.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  user: User = {
    id: 0,
    username: 'Unknown',
    bio: 'No biography available',
  };

  userPosts: BlogPost[] = [];

  @Input() id: number = -1;
  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.user = this.blogService.getUserById(Number(this.id));
    this.userPosts = this.blogService.getPostsByUserId(Number(this.id));
  }
}
