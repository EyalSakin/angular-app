import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-numbers-grid',
  templateUrl: './numbers-grid.component.html',
  styleUrls: ['./numbers-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumbersGridComponent {
  @Output() numberSelected: EventEmitter<number> = new EventEmitter<number>();

  public selectedNumbers: number[] = [];

  constructor(private dialog: MatDialog) {}

  public selectNumber(num: number): void {
    this.selectedNumbers = [
      ...this.selectedNumbers,
      num
    ];
    this.numberSelected.emit(num);
  }

  public showHistory(): void {
    // TODO: open dialog.
  }
}
