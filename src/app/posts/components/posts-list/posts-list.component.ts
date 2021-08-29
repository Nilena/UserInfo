import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postData:any =[];
  control = new FormControl();
  postDataFiltered: Observable<string[]>;
  searchD:any='';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let endpoint ='https://jsonplaceholder.typicode.com/posts';
    this.http.get<any>(endpoint).subscribe((response) => {
      this.postData = response;
      console.log(this.postData)
    })
    this.postDataFiltered = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    debugger
    const filterValue = this._normalizeValue(value);
    return this.postData.filter(street => street.includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
