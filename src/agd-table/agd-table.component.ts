import {Component, Input, OnInit, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {Column} from "./classes/Column";

@Component({
    selector: 'agd-table',
    template: `
    <div class="agd-table">
        <agd-header [columns]="columns"></agd-header>
        <agd-body [columns]="columns" [data]="rows"></agd-body>
    </div>
  `,
    styles: []
})
export class AgdTableComponent implements OnInit, AfterViewInit {
    @Input('columns') columns: Column[];
    @Input('rows') rows: any[];

    @Output('tableReady') tableReady: EventEmitter<any> = new EventEmitter();

    constructor(){
        if (this.columns) {
            console.error("Columns input cannot be empty!");
        }
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.tableReady.emit(this);
    }


}
