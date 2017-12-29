import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../classes/Column";
import {Cell} from "../classes/Cell";

@Component({
    selector: 'agd-header',
    template: `
    <agd-cell *ngFor="let cell of cells" [cellData]="cell"></agd-cell>
  `,
    styles: []
})
export class AgdHeaderComponent implements OnInit {
    @Input('columns') columns: Column[];

    public cells: Cell[];

    constructor() {
    }

    ngOnInit(): void {
        this.cells = this.transformColumnsIntoCells();
    }

    transformColumnsIntoCells(): Cell[] {
        return this.columns.map((column: Column) => {
            return new Cell(column.name, column.prop || column.name);
        })
    }
}
