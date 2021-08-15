import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmDeleteComponent} from './confirm-delete/confirm-delete.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from './search/search.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [ConfirmDeleteComponent, SearchComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule,

  ],
  exports: [
    SearchComponent
  ],
  entryComponents: [
    ConfirmDeleteComponent, SearchComponent
  ]
})
export class CommonConfirmModule { }
