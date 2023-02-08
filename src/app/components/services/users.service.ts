import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  myData:any;

  getinfofromplaceholder(){

      this.myData = this.http.get<any>("https://jsonplaceholder.typicode.com/users");
      return this.myData;
  }

}
