export class Column {
    width: number;
    name: string;
    prop: string;

    constructor(name?: string, width?: number, prop?: string) {
        this.name = name;
        this.width = width;
        this.prop = prop;
    }
}