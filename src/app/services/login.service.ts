import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HOST, REST_LOG_IN} from '../constants/rest.const';

class InitData {
  username: String;
  password: String;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = HOST + REST_LOG_IN;

  constructor(private http: HttpClient) {
  }

  login(username: String, password: String): Observable<string> {
    let initData: InitData = {
      username: username,
      password: password
    };
    return this.http.post<string>(this.loginUrl, initData);;
  }

  static getTokenHeader() {
    const headers = new HttpHeaders({ 'Authorization': window.localStorage.getItem("token") });
    return { headers: headers };
  }

}
