import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Marker } from '../models/marker';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  private url: string;

  constructor(private httpClient: HttpClient ) {
    this.url = 'http://localhost:4200/assets/marker.json';
  }

  getMarkers() {
    return this.httpClient.get(this.url);
  }
}
