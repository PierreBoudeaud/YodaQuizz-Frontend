import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QUIZZ_ENDPOINT, QUIZZ_ENDPOINT_ID } from '../constants/paths';
import { Quizz } from '../models/quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Quizz[]> {
    return this.http.get<Quizz[]>(QUIZZ_ENDPOINT);
  }

  getById(quizzId: string): Observable<Quizz> {
    return this.http.get<Quizz>(QUIZZ_ENDPOINT_ID(quizzId));
  }
}
