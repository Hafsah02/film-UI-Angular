import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './component/post';
  

  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private apiURL = "http://localhost:8080/filmapi";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    })
  }
   
  constructor(private httpClient: HttpClient) { }
   
  // Retrieve all the films by calling the rest api service
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/getallfilms', this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
 // Create film by calling the rest api service
  create(post:Post): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/savefilm', JSON.stringify(post), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  // Retrieve the film based on id by calling the rest api service
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/getfilmbyid/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  // Updating the film by calling the rest api service
  update(id:number, post:Post): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/update/' + id, JSON.stringify(post), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
  // Delete the film based on id by calling the rest api service
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/deletefilm/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}