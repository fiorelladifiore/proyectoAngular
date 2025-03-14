import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Plants} from './plants-list/Plants';

const URL= 'https://6557e65ebd4bcef8b6133c56.mockapi.io/api/plants';

@Injectable({
  providedIn: 'root'
})
export class PlantDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Plants[]>{
    return this.http.get<Plants[]>(URL);
  }
}
