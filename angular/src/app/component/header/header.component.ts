import { Component, OnInit } from '@angular/core';
import { IdPasswordTo } from 'app/class-to/id-password-to';
import { Router } from '@angular/router';
import { SessionTo } from 'app/class-to/session-to';
import Util from 'app/common/util';
import { SessionService } from 'app/common/session.service';
import { WelcomeService } from 'app/component/welcome/welcome.service';
import { HeaderService } from 'app/component/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  model: IdPasswordTo = new IdPasswordTo(null, null);

  constructor(private service: HeaderService, private router: Router, private session: SessionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.session.isLoggedIn = false;
    this.session.user = null;
    this.service.login(this.model).subscribe(
      rjson => {
        if (!rjson || !rjson.status) {
          console.log("rjson not valid");
          this.session.showMessage("Fail to login. Invalid user!!!", null);
          return;
        }
        let sessionTo: SessionTo = new SessionTo(null, null, null, null, null);
        sessionTo.userName = this.model.userName;
        sessionTo.userId = rjson.userId;
        sessionTo.displayName = rjson.firstName;
        sessionTo.mobileNo = rjson.mobileNo;
        sessionTo.emailId = rjson.emailId;
        Util.createSession(sessionTo);
        this.session.isLoggedIn = true;
        this.session.user = sessionTo;
        this.router.navigate(['/home']);
      },
      error => { console.log("error: " + error); },
      () => { console.log("login request completed"); }
    );
  }



}
