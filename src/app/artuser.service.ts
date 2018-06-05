import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtuserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<object> {
    return this.http.get<object>("http://psn52-m:8081/art-team-rest/api/cv", LoginService.getTokenHeader())
  }

}
