import { Injectable } from '@angular/core';
import Util from 'app/common/util';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { IdPasswordTo } from 'app/class-to/id-password-to';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

}
