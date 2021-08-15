import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirm-delete',
  templateUrl:'./confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(
      private _NgbActiveModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  close(){
    this._NgbActiveModal.close();
  }

  save() {
    this._NgbActiveModal.close('delete');
  }
}
