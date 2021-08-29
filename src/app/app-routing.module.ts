import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
		path : '', redirectTo: 'user-list', pathMatch : 'full'
	},
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'albums', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule) },
      { path: 'post', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
      {
        path: '', redirectTo: 'user-list', pathMatch: 'full'
      },
    ],
  },
  {
    path: 'user-list', component: UserListComponent
  },
  {
    path: 'user-details', component: UserDetailsComponent
  },
  
  {
    path: '**', redirectTo: 'user-list', pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
