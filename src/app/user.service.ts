import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {User} from './user';

const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type': 'application/json',
    //'Accept': 'application/json',
    //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
    //'Access-Control-Allow-Origin': '*',
    //'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users', httpOptions);
  }


  updateUser(user: User): void {
    this.http.put('http://localhost:8080/api/users', user, httpOptions).subscribe(value => {}, error1 => console.log(error1));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('userService: ' + message);
  }

}
