import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../services/user-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userDetails: UserDetailService,
    private router :Router) { }

  userData : any = {};
  ngOnInit(): void {
  this.userData =   this.userDetails.getUserInfo();
  }


  albumbs(){
    this.router.navigate(['/albums/show']);
  }

  posts(){
    this.router.navigate(['/post/list']);
  }
}
