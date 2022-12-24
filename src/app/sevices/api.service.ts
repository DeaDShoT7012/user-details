import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdetails } from 'src/models/userdetails';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string='https://dummyjson.com/users'

  constructor(private http:HttpClient) { }

  getallusers():Observable<Userdetails>{
   return this.http.get(this.baseUrl)
  }
}
  
