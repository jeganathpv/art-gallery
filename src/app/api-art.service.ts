import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiArtService {

  private apiUrl = 'https://art-gallery-theta-wheat.vercel.app'; // Example API URL

  constructor(private http: HttpClient) {}

  getArtworks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/published_images`);
  }

  getArtworkDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/published_images/${id}`);
  }
}
