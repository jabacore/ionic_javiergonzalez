import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Spot } from './spot';

@Injectable({
  providedIn: 'root'
})
export class SpotService {
  private spotsUrl = 'api/spots';

  constructor(private http: HttpClient) { }

  getSpots(): Observable<Spot[]> {
    return this.http.get<Spot[]>(this.spotsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxSpotId(): Observable<Spot> {
    return this.http.get<Spot[]>(this.spotsUrl)
    .pipe(
  
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getSpotById(id: number): Observable<Spot> {
    const url = `${this.spotsUrl}/${id}`;
    return this.http.get<Spot>(url)
      .pipe(
        tap(data => console.log('getSpot: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createSpot(spot: Spot): Observable<Spot> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    spot.id = null;
    return this.http.post<Spot>(this.spotsUrl, spot, { headers: headers })
      .pipe(
        tap(data => console.log('createSpot: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteSpot(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.spotsUrl}/${id}`;
    return this.http.delete<Spot>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteSpot: ' + id)),
        catchError(this.handleError)
      );
  }

  updateSpot(spot: Spot): Observable<Spot> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.spotsUrl}/${spot.id}`;
    return this.http.put<Spot>(url, spot, { headers: headers })
      .pipe(
        tap(() => console.log('updateSpot: ' + spot.id)),

        map(() => spot),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
