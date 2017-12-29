import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../classes/Column";

@Component({
    selector: 'agd-body',
    template: `
    <div *ngIf="!data.length" class="no-results">
        No data to display.
    </div>
    <div *ngIf="data">
        <agd-row [columns]="columns" *ngFor="let row of data" [data]="row">
        </agd-row>
    </div>
  `,
    styles: []
})
export class AgdBodyComponent implements OnInit {
    @Input('data') data: any[];
    @Input('columns') columns: Column[];

    constructor() {
    }

    ngOnInit(): void {

    }

}
