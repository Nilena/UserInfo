import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { Routes, RouterModule } from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { MatTableModule } from '@angular/material/table'  


const routes: Routes = [{
  path:'list',
  component:PostsListComponent
},
{
  path:'details/:id',
  component:PostDetailsComponent
}];

@NgModule({
  declarations: [
    PostsListComponent,
    FilterPipe,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatAutocompleteModule,
    MatFormFieldModule ,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
