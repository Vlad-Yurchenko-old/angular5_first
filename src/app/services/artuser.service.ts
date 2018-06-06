import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';
import {UserCV} from '../classes/UserCV';
import {HOST, REST_CV} from '../constants/rest.const';

@Injectable({
  providedIn: 'root'
})
export class ArtuserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<object> {
    return this.http.get<object>(HOST + REST_CV, LoginService.getTokenHeader());
  }

  getUserCv(owner: string): Observable<UserCV> {
    return this.http.get<UserCV>(HOST + REST_CV + owner, LoginService.getTokenHeader());
  }

}
