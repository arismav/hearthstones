import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class hearthcallsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authReq = req.clone({
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Mashape-Key': 'OU5Yu4jnUBmshWymzXXgeE9unwFxp1Uk8fAjsn8iGjp625Xzaj'
            })
        });

        console.log('Intercepted HTTP call', authReq);

        return next.handle(authReq);
    }
}