import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  {
    path: 'post/:id',
    component: PostComponent,
    children: [{ path: 'commnets/:id', component: PostCommentsComponent }],
  },
  { path: '**', component: NotFoundComponent },
];
