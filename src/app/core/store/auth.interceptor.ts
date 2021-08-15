import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../sevices/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let requestOption: any = {};

        if(this.auth.getToken()) {
            requestOption.setHeaders = {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        }

        req = req.clone(requestOption);
        return next.handle(req)
    }

}
