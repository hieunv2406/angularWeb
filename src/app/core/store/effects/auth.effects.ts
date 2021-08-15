import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {from, of} from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import {AuthService} from '../../sevices/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions,
                private authService: AuthService,
                private router: Router,
                private cookie: CookieService) {
    }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginPage),
            concatMap(action =>
                this.authService.login(action).pipe(
                    map(user => AuthActions.loginSuccess({ user })),
                    catchError(error => of(AuthActions.loginFailure({ error })))
                )
            ),
            map((data: any) => {
                if (data instanceof HttpErrorResponse) {
                    return {
                        type: AuthActions.loginFailure.type
                    };
                }
                const user = data.user;
                if (data) {
                    // this.cookie.set('decodeToken', this.parseJwt(user.token));
                    this.cookie.set('token', user.token);
                    this.router.navigateByUrl('/dashboard');
                    this.authService.setIsLoadingSubject(false);
                    return {
                        type: AuthActions.loginSuccess.type,
                        payload: {
                            user: data
                        }
                    };
                } else {
                    this.authService.setIsLoadingSubject(false);
                    return from(Promise.resolve({
                        type: AuthActions.loginFailure.type
                    }));
                }
            })
        ),{ useEffectsErrorHandler: false, dispatch: false }
    );

    parseJwt(token: string) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return window.atob(base64);
    }
}
