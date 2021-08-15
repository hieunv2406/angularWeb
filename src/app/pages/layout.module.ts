import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg';
import {PagesRoutingModule} from './pages-routing.module';
import {
    NgbDropdownModule,
    NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import {TranslationModule} from '../core/i18n/translation.module';
import {LayoutComponent} from './_layout/layout.component';
import {ScriptsInitComponent} from './_layout/init/scipts-init/scripts-init.component';
import {HeaderMobileComponent} from './_layout/components/header-mobile/header-mobile.component';
import {AsideComponent} from './_layout/components/aside/aside.component';
import {FooterComponent} from './_layout/components/footer/footer.component';
import {HeaderComponent} from './_layout/components/header/header.component';
import {TopbarComponent} from './_layout/components/topbar/topbar.component';
import {ExtrasModule} from '../core/partials/layout/extras/extras.module';
import {LanguageSelectorComponent} from './_layout/components/topbar/language-selector/language-selector.component';
import {CoreModule} from '../share/core';
import {SubheaderModule} from '../core/partials/layout/subheader/subheader.module';
import {AsideDynamicComponent} from './_layout/components/aside-dynamic/aside-dynamic.component';
import {HeaderMenuDynamicComponent} from './_layout/components/header/header-menu-dynamic/header-menu-dynamic.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {ConsumersComponent} from './consumers/consumers.component';
import {DialogConsumersComponent} from './consumers/dialog-consumers/dialog-consumers.component';
import {NbIconModule, NbTreeGridModule} from '@nebular/theme';
import {ServicesModule} from './service/services.module';
import {CommonConfirmModule} from './Common/common-confirm.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    declarations: [
        LayoutComponent,
        ScriptsInitComponent,
        HeaderMobileComponent,
        AsideComponent,
        FooterComponent,
        HeaderComponent,
        TopbarComponent,
        LanguageSelectorComponent,
        AsideDynamicComponent,
        HeaderMenuDynamicComponent,
        ConsumersComponent,
        DialogConsumersComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        TranslationModule,
        InlineSVGModule,
        ExtrasModule,
        NgbDropdownModule,
        NgbProgressbarModule,
        CoreModule,
        SubheaderModule,
        MatTableModule,
        NbTreeGridModule,
        // NbThemeModule.forRoot(ConsumersComponent),
        NbIconModule,
        MatButtonModule,
        MatSortModule,
        MatDialogModule,
        ServicesModule,
        CommonConfirmModule,
        MatFormFieldModule,
        MatSelectModule,
        MatPaginatorModule
    ],

})
export class LayoutModule { }
