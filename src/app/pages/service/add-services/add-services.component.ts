import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-services',
  templateUrl:'./add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit {
  public checkOpen = true;
  _isCollapsed = false;
  constructor(
      private _NgbActiveModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  close(){
    this._NgbActiveModal.close()
  }

  save() {

  }

  Change(evt) {
    if (evt === 'add'){
      this.checkOpen = true;
    }else {
      this.checkOpen = false;
    }
  }
}
