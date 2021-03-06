import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../../share/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../../auth/_models/user.model';

@Component({
  selector: 'app-user-offcanvas',
  templateUrl: './user-offcanvas.component.html',
  styleUrls: ['./user-offcanvas.component.scss'],
})
export class UserOffcanvasComponent implements OnInit {
  extrasUserOffcanvasDirection = 'offcanvas-right';
  user$: Observable<UserModel>;

  constructor(private layout: LayoutService,
              // private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.extrasUserOffcanvasDirection = `offcanvas-${this.layout.getProp(
      'extras.user.offcanvas.direction'
    )}`;
    // this.user$ = this.auth.currentUserSubject.asObservable();
  }

  logout() {
    // this.auth.logout();
    document.location.reload();
  }
}
