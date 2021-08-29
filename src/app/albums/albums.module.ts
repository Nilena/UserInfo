import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAlbumsComponent } from './Components/user-albums/user-albums.component';
import { Routes, RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AlbumPhotosComponent } from './Components/album-photos/album-photos.component';
import { MatListModule } from '@angular/material/list';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

const routes: Routes = [{
  path:'show',
  component:UserAlbumsComponent
}];


@NgModule({
  declarations: [
    UserAlbumsComponent,
    AlbumPhotosComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatListModule,
    MatPaginatorModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ]
})
export class AlbumsModule { }
