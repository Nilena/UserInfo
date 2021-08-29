import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postData: any = [];
  control = new FormControl();
  searchD: any = '';
  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    let endpoint = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get<any>(endpoint).subscribe((response) => {
      this.postData = response;
      console.log(this.postData)
    })
  }


  showDetails(item) {
    this.router.navigate(['post/details/' + item.id])
  }
}
