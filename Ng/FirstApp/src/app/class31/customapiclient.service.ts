import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomapiclientService {

  constructor(private httpclient : HttpClient) { 

  }

  getDept()
  {
    return this.httpclient.get("http://localhost:3300/departments");   
  }
}
