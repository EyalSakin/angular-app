import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-number-history',
  templateUrl: './number-history.component.html',
  styleUrls: ['./number-history.component.scss']
})
export class NumberHistoryComponent {
  public lastSelectedNumbers$: Observable<number[]> = of([1, 2, 3, 5, 7]);
  constructor(public dialogRef: MatDialogRef<NumberHistoryComponent>) { }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
