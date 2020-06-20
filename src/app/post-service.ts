import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'text' as 'text'
  }

  constructor(private http: HttpClient) { }

  async postTDT(payload: String) {
    console.log('postTDT() called...');
    let data = await this.http.post('https://xpress--sbatester.repl.co/tdt', payload, this.httpOptions).toPromise();
    // console.log('postTDT() = ' + data);
    return data;
  }

}