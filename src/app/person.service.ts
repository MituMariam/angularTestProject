import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPerson} from './person';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private x:string = "/assets/JSONData/persons.json";
  getData(): Observable<IPerson[]>
  {
    return this.http.get<IPerson[]>(this.x).pipe(catchError(this.showError));
    // return[
    //   {id:1, name:"mitu", age:25, gender:"female"},
    //   {id:2, name:"borna", age:26, gender:"female"},
    //   {id:3, name:"ritu", age:22, gender:"female"},
    //   {id:4, name:"bindu", age:30, gender:"female"},
    // ];
  }

  showError(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client side error', errorResponse.error.message)
    }else{
      console.error('Server side error', errorResponse.error.message)
    }
    return throwError('Please try again later. We will be back soon!');
    // return new ErrorObservable('Please try again later');
  }

  constructor(private http: HttpClient) { }
}
