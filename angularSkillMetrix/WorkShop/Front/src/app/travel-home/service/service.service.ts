import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8000';

  SearchTripsData(keyword: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}?keyword=${keyword}`);
  }
  getTripsData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
} 
