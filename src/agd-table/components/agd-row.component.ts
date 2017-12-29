import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../classes/Column";
import {Cell} from "../classes/Cell";

@Component({
    selector: 'agd-row',
    template: `
    <agd-cell *ngFor="let cell of row" [cellData]="cell"></agd-cell>
  `,
    styles: []
})
export class AgdRowComponent implements OnInit {
    @Input('data') data: any;
    @Input('columns') columns: Column[];

    public row: Cell[];
    constructor() {
    }

    ngOnInit(): void {
        this.row = this.transformDataToCells();
    }

    transformDataToCells(): Cell[] {
        const props = this.columns.map((column: Column) => column.prop || column.name.toLowerCase());
        return props.map((columnKey: string) => {
            return new Cell(this.data[columnKey], columnKey);
        });
    }
}
