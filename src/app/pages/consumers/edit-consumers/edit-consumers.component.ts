import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material/chips';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DialogConsumersComponent} from '../dialog-consumers/dialog-consumers.component';
import {MatTableDataSource} from '@angular/material/table';
import {PeriodicElement} from '../consumers.component';
export interface Plugins {
    name: string;
    scope: number;
    apply: string;
    created: string;
}

export interface Routes {
    name_service: string;
    name_router: string;
    host: string;
    ip: string;
}
const ELEMENT_DATA: Plugins[] = [
    {name: 'a', scope: 1, apply: 'Y', created: '15/1/2019'},
    {name: 'b', scope: 2, apply: 'N', created: '26/5/2000'},
    {name: 'c', scope: 3, apply: 'N', created: '26/6/2018'},
];
const ELEMENT_DATA1: Routes[] = [
    {name_service: 'a', host: '192.168.1.3', name_router: 'Y', ip: '203.162.0.87'},
    {name_service: 'b', host: '192.168.1.98', name_router: 'N', ip: '203.162.0.152'},
    {name_service: 'c', host: '192.168.1.198', name_router: 'G', ip: '203.162.0.222'},
];
@Component({
    selector: 'app-edit-consumers',
    templateUrl: './edit-consumers.component.html',
    styleUrls: ['./edit-consumers.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EditConsumersComponent implements OnInit, AfterViewInit {
    colours = [10, 25, 50, 100];
    newGroup: string;
    visible = true;
    selectable = true;
    removable = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    groupCtrl = new FormControl();
    filteredGroups: Observable<string[]>;
    groups: string[] = ['Group default'];
    allGroups: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
    menu: string[] = ['BASIC', 'API KEYS', 'HMAC', 'OAUTH2', 'JWT'];
    selectedValue: string;
    tileSelect: string;
    contentSelect: string;
    classSelect: string;
    contentButton: string;
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    displayedColumns: string[] = [ 'name', 'scope', 'apply', 'created'];
    dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
    // displayedColumns1: string[] = [ 'service', 'pluginService', 'route', 'pluginRoute'];
    @ViewChild('groupInput') groupInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    constructor(private modalService: NgbModal) {

        this.filteredGroups = this.groupCtrl.valueChanges.pipe(
            startWith(null),
            map((fruit: string | null) => fruit ? this._filter(fruit) : this.allGroups.slice()));
        this.changeModel(['BASIC']);
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.groupInput.nativeElement.focus();
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.groups.push(value.trim());
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }

        this.groupCtrl.setValue(null);
    }

    remove(group: string): void {
        const index = this.groups.indexOf(group);

        if (index >= 0) {
            this.groups.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.groups.push(event.option.viewValue);
        this.groupInput.nativeElement.value = '';
        this.groupCtrl.setValue(null);
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.allGroups.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }

    onSubmit() {
        if ((this.newGroup || '').trim()) {
            this.groups.push(this.newGroup.trim());
        }
    }

    changeModel(e) {
        console.log(e);
        const temp = e[0];
        this.selectedValue = temp;
        switch (temp) {
            case 'API KEYS':
                this.selectedValue = temp;
                this.tileSelect = 'Api Keys';
                this.contentSelect = 'You have not created any keys for this consumer yet';
                this.classSelect = 'fas fa-key fa-2x mr-5';
                this.contentButton = 'CREATE API KEY';
                break;
            case 'HMAC':
                this.selectedValue = temp;
                this.tileSelect = 'HMAC Auth';
                this.contentSelect = 'You have not created any HMAC credentials for this consumer yet';
                this.classSelect = 'fas fa-code fa-2x mr-5';
                this.contentButton = 'CREATE CREDENTIALS';
                break;
            case 'OAUTH2':
                this.selectedValue = temp;
                this.tileSelect = 'OAuth2';
                this.contentSelect = 'You have not created any OAuth2 credentials for this consumer yet';
                this.classSelect = 'fas fa-shield-alt fa-2x mr-5';
                this.contentButton = 'CREATE CREDENTIALS';
                break;
            case 'JWT':
                this.selectedValue = temp;
                this.tileSelect = 'JWT';
                this.contentSelect = 'You have not created any jwt credentials for this consumer yet';
                this.classSelect = 'fas fa-fingerprint fa-2x mr-5';
                this.contentButton = 'CREATE JWT';
                break;
            default:
                this.selectedValue = temp;
                this.tileSelect = 'Basic Auth';
                this.contentSelect = 'You have not created any Basic Auth credentials for this consumer yet';
                this.classSelect = 'fas fa-user fa-2x mr-5';
                this.contentButton = 'CREATE CREDENTIALS';
                break;

        }
    }
    openDialog() {
        const modalRef = this.modalService.open(DialogConsumersComponent, {
            backdrop: 'static',
            backdropClass: 'customBackdrop',
            centered: true, });
        modalRef.componentInstance.title = this.selectedValue;
        modalRef.result.then(() =>
            () => { }
        );
    }
    openDialogPlugin(){
    }

}
