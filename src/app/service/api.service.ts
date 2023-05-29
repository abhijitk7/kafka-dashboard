import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InternalClusterState } from '../models/InternalClusterState';

const API_URL = 'http://localhost:8085';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllCluster(): Observable<any> {
    return this.http.get(API_URL + '/local/cluster/all').pipe(map(res => res));
  }

  public connect(): Observable<void> {
    return this.http.get<void>(API_URL + 'connect/local').pipe(map(res => res));
  }
}
