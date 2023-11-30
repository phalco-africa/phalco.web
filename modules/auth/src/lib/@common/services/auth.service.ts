import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Credentials } from '../models/credentials.model';
import { catchError, map, of } from 'rxjs';
import { BaseResponse, Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(payload: Credentials) {
    return this.http.post<BaseResponse<Login>>(
      'https://gateways.users.phalco.africa/api/Auth/Login',
      { ...payload })
      .pipe(catchError(e => {
        console.log('this is the error returned by login', e)
        return of({
          success: false,
          message: 'it failed',
          data: null,
          status: 500
        });
      }), map(res => {
        console.log('this is the response we are mapping', res)
        if (res.success) {
          return res.data
        }

        return null;
      }))
  }
}
