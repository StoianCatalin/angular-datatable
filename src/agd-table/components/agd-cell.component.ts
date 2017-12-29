import {Component, Input, AfterViewInit, ElementRef} from '@angular/core';
import {Cell} from "../classes/Cell";

@Component({
    selector: 'agd-cell',
    template: `
    <div class="agd-table-cell">
        {{ cellData.value }}
    </div>
  `,
    styles: []
})
export class AgdCellComponent implements AfterViewInit {
    @Input('cellData') cellData: Cell;

    width: number;

    constructor(private element: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.width = this.element.nativeElement.offsetWidth;
    }
}
