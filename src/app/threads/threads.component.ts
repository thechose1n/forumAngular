import { Component, OnInit, Input } from '@angular/core';
import {THREADS} from '../thread';
import {MatDialog} from '@angular/material';
import {InputWindowComponent} from '../input-window/input-window.component';

export interface DialogData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  id: number;
  title: string;
  content: string;
  threads = THREADS;
  thread = {id: this.id, title: this.title, content: this.content};
  num: number;

  constructor(public dialog: MatDialog) { }

  openWindow(): void {
    const dialogRef = this.dialog.open(InputWindowComponent, {
      width: '1000px',
      data: {title: this.title, content: this.content},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.id = this.threads.length + 1;
        this.title = result.title;
        this.content = result.content;
        while (this.threads.some(e => e.id === this.id)) {
          this.id++;
          console.log(this.id);
        }
        this.thread = {id: this.id, title: this.title, content: this.content};
        this.threads.push(this.thread);
        this.title = '';
        this.content = '';
        console.log(this.threads);
      }
    });
  }

  ngOnInit() {
  }

}
