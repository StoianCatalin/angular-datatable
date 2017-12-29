import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AgdTableComponent} from './agd-table.component';
import {AgdHeaderComponent} from "./components/agd-header.component";
import {AgdRowComponent} from "./components/agd-row.component";
import {AgdCellComponent} from "./components/agd-cell.component";
import {AgdBodyComponent} from "./components/agd-body.component";


@NgModule({
    declarations: [
        AgdTableComponent,
        AgdHeaderComponent,
        AgdRowComponent,
        AgdCellComponent,
        AgdBodyComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        AgdTableComponent
    ]
})
export class AgdTableModule {
}
