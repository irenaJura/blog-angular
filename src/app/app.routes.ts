import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [{ path: 'home', component: HomeComponent }];
