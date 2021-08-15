import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'kt-portlet-lable',
    template: `
        <div class="card-body">
            <div class="card-title" [hidden]="noTitle">
                <ng-content *ngIf="!title" select="[ktPortletTitle]"></ng-content>
                <h3 *ngIf="title" class="card-label" [innerHTML]="title"></h3>
            </div>
            <div class="card-text">
                <ng-content *ngIf="!description" select="[ktPortletTitle]"></ng-content>
                <p *ngIf="description" class="card-text" [innerHTML]="description"></p>
            </div>
        </div>
        `
})

export class PortletLableComponent implements OnInit {
    // a simple title text
    @Input() title: string;

    // a simple description text
    @Input() description: string;

    // remove title container
    @Input() noTitle: boolean;

    @HostBinding('class') classes = 'card-header';


    ngOnInit(): void {
    }
}
