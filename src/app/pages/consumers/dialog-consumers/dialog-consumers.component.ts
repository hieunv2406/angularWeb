import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-consumers',
  templateUrl: './dialog-consumers.component.html',
  styleUrls: ['./dialog-consumers.component.scss']
})
export class DialogConsumersComponent implements OnInit {
  @Input() title: string;
  isDialog = false;
  colours = ['HS256', 'RS256'];
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }
  closeDialog(){
    this.activeModal.dismiss();
  }

}
