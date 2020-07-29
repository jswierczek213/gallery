import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  // REST API keys
  accessKey = environment.accessKey;
  secretKey = environment.secretKey;

  // REST API
  api = 'https://api.unsplash.com';

  searchPhotos(
    query: string,
    page = 1,
    photosCount = 10,
    orderBy: 'latest' | 'relevant' = 'relevant',
    orientation: 'landscape' | 'portrait' | 'squerish' = 'landscape') {
    const headers = new HttpHeaders({ Authorization: 'Client-ID ' + this.accessKey });
    const url = `${this.api}/search/photos?query=${query}&page=${page}&photosCount=${photosCount}&order_by=${orderBy}&orientation=${orientation}`;
    return this.http.get(url, { headers });
  }
}
