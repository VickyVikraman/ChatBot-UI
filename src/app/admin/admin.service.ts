import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
const httpOptions = {};
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }
  upload(formData)
  {

    return this.http.post('http://localhost:5000/upload', formData,httpOptions).toPromise()
  }

  uploadHoliday(formData)
  {
    return this.http.post('http://localhost:5000/holiday', formData,httpOptions).toPromise();
  }

}
