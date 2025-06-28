import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<any> {
    const API_URL = `https://jsonplaceholder.typicode.com/posts`;

    return this.httpClient.get(API_URL);
  }
}
