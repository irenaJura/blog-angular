export interface User {
  id: number;
  username: string;
  bio: string;
}

export interface Comment {
  id: number;
  author: string;
  userId: number;
  content: string;
  datePosted: Date;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  dateCreated: Date;
  snippet: string;
  tags: string[];
  comments: Comment[];
  userId: number;
}
