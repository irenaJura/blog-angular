import { Injectable } from '@angular/core';
import { BlogPost, User } from './blog-post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private users: User[] = [
    { id: 1, username: 'Aarav', bio: 'Tech enthusiast and gadget reviewer.' },
    { id: 2, username: 'Mei', bio: 'Food lover and travel photographer.' },
    {
      id: 3,
      username: 'Haruto',
      bio: 'Dedicated game developer and eSports fan.',
    },
    {
      id: 4,
      username: 'Laila',
      bio: 'Novelist and poet focused on contemporary life.',
    },
  ];

  private defaultUser: User = {
    id: 0,
    username: 'Unknown',
    bio: 'No biography available',
  };

  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Technology',
      content: 'Exploring the upcoming tech trends that will shape our future.',
      dateCreated: new Date(2023, 0, 1),
      snippet: 'What will the tech industry look like in the next decade?',
      tags: ['Tech', 'Innovation'],
      userId: 1,
      comments: [
        {
          id: 1,
          author: 'Mei',
          userId: 2,
          content: 'Absolutely fascinating read!',
          datePosted: new Date(2023, 0, 2),
        },
        {
          id: 2,
          author: 'Laila',
          userId: 4,
          content: 'Looking forward to seeing these predictions come true.',
          datePosted: new Date(2023, 0, 3),
        },
      ],
    },
    {
      id: 2,
      title: 'Best Coffee Shops Around the World',
      content: 'A personal journey through the world’s best coffee.',
      dateCreated: new Date(2023, 0, 5),
      snippet: 'Join me as I explore top coffee destinations.',
      tags: ['Travel', 'Food'],
      userId: 2,
      comments: [
        {
          id: 3,
          author: 'Haruto',
          userId: 3,
          content: 'Makes me want to book a flight right now!',
          datePosted: new Date(2023, 0, 6),
        },
        {
          id: 4,
          author: 'Aarav',
          userId: 1,
          content: 'I need to visit these places!',
          datePosted: new Date(2023, 0, 7),
        },
      ],
    },
    {
      id: 3,
      title: 'Understanding the Basics of Game Development',
      content:
        'Diving into the essentials every aspiring game developer should know.',
      dateCreated: new Date(2023, 0, 10),
      snippet: 'Start your journey in game development with these tips.',
      tags: ['Gaming', 'Development'],
      userId: 3,
      comments: [
        {
          id: 5,
          author: 'Mei',
          userId: 2,
          content: 'Very informative for beginners.',
          datePosted: new Date(2023, 0, 11),
        },
        {
          id: 6,
          author: 'Aarav',
          userId: 1,
          content: 'Thanks for the insights!',
          datePosted: new Date(2023, 0, 12),
        },
      ],
    },
    {
      id: 4,
      title: 'The Art of Writing Modern Poetry',
      content: 'Explore the nuances of writing poetry in today’s world.',
      dateCreated: new Date(2023, 0, 15),
      snippet: 'Poetry that resonates with contemporary audiences.',
      tags: ['Art', 'Literature'],
      userId: 4,
      comments: [
        {
          id: 7,
          author: 'Haruto',
          userId: 3,
          content: 'Inspiring and beautifully written.',
          datePosted: new Date(2023, 0, 16),
        },
        {
          id: 8,
          author: 'Mei',
          userId: 2,
          content: 'Poetry is indeed a powerful form of expression.',
          datePosted: new Date(2023, 0, 17),
        },
      ],
    },
  ];

  private defaultBlogPost: BlogPost = {
    id: 0,
    title: 'Not Found',
    content: 'This post does not exist.',
    dateCreated: new Date(),
    snippet: 'No details available.',
    tags: [],
    comments: [],
    userId: 0,
  };

  getPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getPostById(id: number): BlogPost {
    return (
      this.blogPosts.find((post) => post.id === id) || this.defaultBlogPost
    );
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id) || this.defaultUser;
  }

  getPostsByUserId(userId: number): BlogPost[] {
    return this.blogPosts.filter((post) => post.userId === userId);
  }
}
