import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor() { }
  userData: any = {};
  public setUserInfo(userInfo: {}) {
    this.userData = userInfo;
    this.saveToLocalStorage('profile', JSON.stringify(userInfo));
  }


 public getUserInfo() {
      let profile = this.getFromLocalStorage('profile');
      this.userData = profile ? JSON.parse(profile) : null;
      return   this.userData ;
  
  }



  public saveToLocalStorage(key: string, value: any) {
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      console.error('Something went wrong with storage!');
    }
  }
  public getFromLocalStorage(key: string) {
    try {
      return localStorage.getItem(key);
    } catch (err) {
      console.error('Something went wrong with storage!');
    }
    return null;
  }
}
