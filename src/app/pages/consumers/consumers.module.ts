import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ConsumersComponent} from './consumers.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DialogConsumersComponent} from './dialog-consumers/dialog-consumers.component';
import {MatDialogModule} from '@angular/material/dialog';
import {EditConsumersComponent} from './edit-consumers/edit-consumers.component';
import {MatTabsModule} from '@angular/material/tabs';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {CommonConfirmModule} from '../Common/common-confirm.module';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [EditConsumersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ConsumersComponent,
            },
            {
                path: 'edit-consumers',
                component: EditConsumersComponent
            },
        ]),
        MatInputModule,
        MatTabsModule,
        TranslateModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatListModule,
        FormsModule,
        CommonConfirmModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule
    ],
    entryComponents: [DialogConsumersComponent]
})
export class ConsumersModule {
}
