import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  value:any =null;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  postDetails :postDetailsData|null =null;
  constructor(private activatedRoute:ActivatedRoute,
    private http:HttpClient) {
      
     }

  ngOnInit(): void {
    debugger
    this.value = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.value)
    let endpoint = 'https://jsonplaceholder.typicode.com/posts/'+this.value;
    this.http.get<any>(endpoint).subscribe((response) => {
      this.postDetails = response as postDetailsData ;
      console.log(this.postDetails)
    })
  }

}
export interface postDetailsData {
  name: string;
  id: number;
  userId: number;
  title: string;
}