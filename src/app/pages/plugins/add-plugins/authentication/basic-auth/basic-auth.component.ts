import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-auth',
  templateUrl: './basic-auth.component.html',
  styleUrls: ['./basic-auth.component.scss']
})
export class BasicAuthComponent implements OnInit {

  constructor(private ngbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  get activeModal() {
    return this.ngbActiveModal;
  }

  public cancel() {
    this.activeModal.dismiss();
  }
}
export class InputClearableExample {
  value = 'Clear me';
}
