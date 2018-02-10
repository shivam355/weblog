import { Component, OnInit } from '@angular/core';
import { IdPasswordTo } from 'app/class-to/id-password-to';
import { Router } from '@angular/router';
import { SessionTo } from 'app/class-to/session-to';
import Util from 'app/common/util';
import { SessionService } from 'app/common/session.service';
import { WelcomeService } from 'app/component/welcome/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [WelcomeService]
})
export class WelcomeComponent implements OnInit {

  constructor(private service: WelcomeService, private router: Router, private session: SessionService) { }

  ngOnInit() {
  }



}
