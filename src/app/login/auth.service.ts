import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import {catchError, tap} from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
export class AuthService{
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();
    constructor(private apiService : ApiService) {
        const token = localStorage.getItem('token_auth');
        this._isLoggedIn$.next(!!token);
    }
    login(param: any){
        return this.apiService.login(param).pipe(
            tap((response: any) =>{
                localStorage.setItem('token_auth',response.token)
                this._isLoggedIn$.next(true);
            })
        )
    }
}
