import {Component, OnInit} from '@angular/core';
import {Column} from "../agd-table/classes/Column";

@Component({
    selector: 'agd-root',
    template: `
    <agd-table class="classic" [columns]="columns" [rows]="rows"></agd-table>
  `,
    styles: []
})
export class AppComponent implements OnInit {
    columns = null;
    rows = null;

    constructor(){
    }

    ngOnInit(): void {
        this.columns = [
            new Column('Name', 100, 'productName'),
            new Column('Description', 100),
            new Column('Price', 200)
        ];

        this.rows = [
            {productName: 'Unealtadsadsa1', description: "Todo", price: 120},
            {productName: 'Unealta2', description: "Todo2", price: 140},
            {productName: 'Unealta3', description: "Todo3", price: 20},
            {productName: 'Unealta4', description: "Todo4", price: 4520},
        ];
    }
}
