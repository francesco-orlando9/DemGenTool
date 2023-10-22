import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, debounceTime, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MjmlApiService {

  http = inject(HttpClient);
  apiUrl = "http://127.0.0.1:3000";

  private _html$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public get html$() {
    return this._html$.asObservable();
  }

  convertMjmlToJson(mjmlJson: any): void {
    this.http.post(this.apiUrl + '/transform', mjmlJson)
      .pipe(
        filter(response => response !== undefined),
        debounceTime(300),
      )
      .subscribe((response: any) => {
        this._html$.next(response.data.html)
      });
  }
}
