import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  queryParams = new HttpParams();

  postCrawlingData(query: {
    startUrl: string;
    maxDepth: string;
    maxPages: string;
  }) {
    const { startUrl, maxDepth, maxPages } = query;
    this.queryParams = this.queryParams.set('startUrl', startUrl);
    this.queryParams = this.queryParams.set('maxDepth', maxDepth);
    this.queryParams = this.queryParams.set('maxPages', maxPages);
    return this.http.get(environment.CRAWL_API_URL, {
      params: this.queryParams,
    });
  }
}
