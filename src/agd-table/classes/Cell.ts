
export class Cell {
    value: string;
    referenceColumn: string;

    constructor(value: string, referenceColumn: string) {
        this.value = value;
        this.referenceColumn = referenceColumn;
    }
}