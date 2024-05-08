import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://tripsservice.onrender.com/';

  //GET PARAM DATA
  SearchTripsData(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?keyword=${keyword}`);
  }
  //Get DATA
  getTripsData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  //POST DATA
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, data, { headers });
  }
} 
