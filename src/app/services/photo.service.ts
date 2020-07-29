import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  // REST API keys
  accessKey = environment.accessKey;
  secretKey = environment.secretKey;

  // REST API
  api = 'https://api.unsplash.com';

  getListFromAllPhotos(page = 1, photosCount = 10, orderBy: 'latest' | 'oldest' | 'popular' = 'latest') {
    const headers = new HttpHeaders({ Authorization: 'Client-ID ' + this.accessKey });
    return this.http.get(`${this.api}/photos?page=${page}&per_page=${photosCount}&order_by=${orderBy}`, { headers });
  }

  getSinglePhoto(photoId: string) {
    const headers = new HttpHeaders({ Authorization: 'Client-ID ' + this.accessKey });
    return this.http.get(`${this.api}/photos/${photoId}`, { headers });
  }

  getRandomPhoto(orientation: 'portrait' | 'landscape' | 'squarish' = 'landscape') {
    const headers = new HttpHeaders({ Authorization: 'Client-ID ' + this.accessKey });
    return this.http.get(`${this.api}/photos/random?orientation=${orientation}`, { headers });
  }

  getPhotoStatistics(photoId: string) {
    const headers = new HttpHeaders({ Authorization: 'Client-ID ' + this.accessKey });
    return this.http.get(`${this.api}/photos/${photoId}/statistics`, { headers });
  }

  getPhotoDownloadUrl(photoId: string) {
    const headers = new HttpHeaders({ Authorization: 'Client-ID ' + this.accessKey });
    return this.http.get(`${this.api}/photos/${photoId}/download`, { headers });
  }
}
