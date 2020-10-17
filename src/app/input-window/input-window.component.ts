import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../threads/threads.component';

@Component({
  selector: 'app-input-window',
  templateUrl: './input-window.component.html',
  styleUrls: ['./input-window.component.css']
})
export class InputWindowComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InputWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  resetText() {
  }

  ngOnInit() {

  }

}
