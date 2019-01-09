import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http : HttpClient) { }
  sendMessage(msg)
  {
    let message={
      message:msg
    }
    return this.http.post("http://localhost:5000/send",message,httpOptions)
 }

}
