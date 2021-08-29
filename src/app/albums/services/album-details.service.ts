import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailsService {
  albumList:any =[];
  constructor(private http: HttpClient) {

  }

  // getAlbum(userId, response) {
  //   let endpoint='https://jsonplaceholder.typicode.com/users/ablumbs/'+userId;
  //  this.http.get<any>(endpoint).subscribe((response) => {
  //    return response;
  //  })
  // }
}
