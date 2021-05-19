import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../shared/token-storage.service';

const Token_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenStorageService ) {}
  // intercepter les requêtes http entrantes et sortantes afin de les modifier ou d'implimenter 
  // une mécanique logicielle particulière
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = request;
    const token = this.tokenService.getToken();
    if(token != null) {
      // pour utiliser HTTP request, la méthode clonage doit être utilisée
      authReq = request.clone({ headers: request.headers.set(Token_HEADER_KEY, token  )});
    }
    return next.handle(authReq);
  }
}
