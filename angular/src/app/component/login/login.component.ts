import { Component, OnInit } from '@angular/core';
import { IdPasswordTo } from 'app/class-to/id-password-to';
import { LoginService } from 'app/component/login/login.service';
import { Router } from '@angular/router';
import { SessionTo } from 'app/class-to/session-to';
import Util from 'app/common/util';
import { SessionService } from 'app/common/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  model: IdPasswordTo = new IdPasswordTo(null, null);

  constructor(private service: LoginService, private router: Router, private session: SessionService) { }

  ngOnInit() {
  }

}
