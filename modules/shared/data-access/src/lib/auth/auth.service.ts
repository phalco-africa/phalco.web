import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from '@env/environment';

import { Response } from '../@common';
import { LoginRequest, LoginResponse } from './models/login.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenStore = new BehaviorSubject<string | null>(null);

  get isLoggedIn$() {
    return this.tokenStore.asObservable().pipe(map(t => !!t));
  }

  get isLoggedIn() {
    return !!this.tokenStore.value;
  }

  get token$() {
    return this.tokenStore.asObservable();
  }

  get token() {
    return this.tokenStore.value;
  }

  constructor(private http: HttpClient) { }

  setupAuthToken() {
    if (!this.token) {
      this.tokenStore.next(this.getToken());
    }
  }

  login(payload: LoginRequest) {
    return this.http.post<Response<LoginResponse>>(`${environment.baseUrl}/Auth/Login`, payload)
      .pipe(
        tap(res => {
          if (res?.success && res.data?.accessToken) {
            this.storeToken(res.data.accessToken);
          }
        }),
        catchError(e => {
          if (!(e instanceof Error)) {
            return throwError(() => new Error(e.error.message));
          }

          throw e;
        })
      );
  }

  private storeToken(token: string) {
    sessionStorage.setItem(environment.tokenKey, token);
    this.tokenStore.next(token);
  }

  private getToken() {
    try {
      const token = sessionStorage.getItem(environment.tokenKey);

      if (!token) {
        return null;
      }

      return token;
    } catch (e) {
      return null;
    }
  }

  private clearToken() {
    sessionStorage.removeItem(environment.tokenKey);
    this.tokenStore.next(null);
  }
}
