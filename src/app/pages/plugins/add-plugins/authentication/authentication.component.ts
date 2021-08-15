import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BasicAuthComponent} from './basic-auth/basic-auth.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }
  openModalBasicAuth() {
    const modalRef = this.modal.open(BasicAuthComponent, {size: 'md', centered: true});
  }
}
