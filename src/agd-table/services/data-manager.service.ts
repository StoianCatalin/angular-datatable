import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Column} from "../classes/Column";

@Injectable()
export class DataManagerService {
  private columns$: BehaviorSubject<Column[]>;

  constructor() {
    this.columns$ = new BehaviorSubject(null);
  }

  setColumns(columns: Column[]): void {
    this.columns$.next(columns);
  }

  getColumns(): Observable<Column[]> {
    return this.columns$.asObservable();
    
  }
}
