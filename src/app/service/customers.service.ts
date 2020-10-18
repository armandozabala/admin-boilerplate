import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private urlEndPoint = 'http://localhost:8080/api';

  private httpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json'});


  constructor(private authService: AuthService, private http: HttpClient) { }

  private addAuth(){

     let token = this.authService.token;

     if(token != null){
        return this.httpHeaders.append('Authorization','Bearer '+token);
     }

     return this.httpHeaders;
  }

  getUsers(){
      return this.http.get(this.urlEndPoint+'/users/all',{ headers: this.addAuth() }).pipe(
          catchError(e => {
              return throwError(e);
          })
      );
  }
}
