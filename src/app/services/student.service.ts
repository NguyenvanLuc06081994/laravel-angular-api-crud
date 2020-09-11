import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStudent} from '../istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  URL = 'http://localhost:8000/api/students';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.URL);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.URL + '/' + id);
  }

  add(user: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this.URL, user);
  }

  getStudentById(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(this.URL + '/' + id);
  }

  edit(user: IStudent, id: number): Observable<IStudent> {
    return this.http.put<IStudent>(this.URL + '/' + id, user);
  }
}
