import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {catchError, finalize, switchMap} from 'rxjs/operators';
import {AuthModel} from '../auth/_models/auth.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService implements OnDestroy {

    private readonly baseUrl;
    private isLoadingSubject: BehaviorSubject<boolean>;

    private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

    constructor(private http: HttpClient,
                private cookie: CookieService,
                private router: Router) {
        this.baseUrl = environment.apiUrl;
        this.isLoadingSubject = new BehaviorSubject<boolean>(false);
        // const subscr = this.getUserByToken().subscribe();
        // this.unsubscribe.push(subscr);

    }
    login(account: any): Observable<any> {
        const userDto = {
            username : account.username,
            password : account.password
        };

        const options = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        };
        return this.http.post(this.baseUrl + 'api/account/signIn', userDto, options).pipe(
            // switchMap(() => this.getUserByToken()),
            catchError((err) => {
                return of(undefined);
            }),
            finalize(() => this.isLoadingSubject.next(false))
        );
    }

    getToken() {
        return this.cookie.get('token');
    }

    logout() {
        this.cookie.deleteAll();
        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }

    getIsLoadingSubject(): Observable<boolean> {
        return this.isLoadingSubject.asObservable();
    }

    setIsLoadingSubject(isLoading: boolean) {
        this.isLoadingSubject.next(isLoading);
    }

    // getUserByToken(): Observable<AuthModel> {
    //     const auth = this.getAuthFromLocalStorage();
    //     if (!auth || !auth.accessToken) {
    //         return of(undefined);
    //     }
    //     this.isLoadingSubject.next(true);
    //
    // }

    // getUserByToken(): Observable<any> {
    //     this.isLoadingSubject.next(false);
    // }

    // private getAuthFromLocalStorage(): AuthModel {
    // }

    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }

}
