import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumDetailsService } from '../../services/album-details.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.css']
})
export class UserAlbumsComponent implements OnInit {

  albumList: any = [];
  userId: any = '';
  p: number = 1;
  currentPage = 1;
  expandeSrc: any = null;
  constructor(private albumService: AlbumDetailsService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    // this.userId = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {

    this.getAlbumList();

  }
  getAlbumList() {
    let endpoint = 'https://jsonplaceholder.typicode.com/photos';
    this.http.get<any>(endpoint).subscribe((response) => {
      console.log(response);
      this.albumList = response;
    })
  }

  getServerData(event) {
    console.log(event)

  }

  pageChange(pageNumber: number) {
    console.log(pageNumber)
  }


  expandedImage(value) {
    this.expandeSrc = value;
  }
  imagePopup() {
    this.expandeSrc = null;
  }
}
