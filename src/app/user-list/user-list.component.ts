import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDetailService } from '../services/user-detail.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList : any = [];
  constructor( private http:HttpClient,
    private router:Router,
    private userDetailService:UserDetailService) { }

  ngOnInit(): void {
    let endpoint ='https://jsonplaceholder.typicode.com/users';
    this.http.get<any>(endpoint).subscribe((response) => {
      this.userList = response;
      console.log(response)
    })
  }

  showInfo(info){
    console.log(info)
    this.userDetailService.setUserInfo(info);
    this.router.navigate(['/user-details']);
  }
}
