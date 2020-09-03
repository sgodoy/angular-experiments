import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IsbnApiService {

  constructor(private http: HttpClient) { }

  getBook(isbnCode: string){
    // https://openlibrary.org/dev/docs/api/books
    return this.http.get<any>(environment.isbnApiUrl + 'books?bibkeys=ISBN:' + isbnCode + '&jscmd=details&format=json');
  }

}
