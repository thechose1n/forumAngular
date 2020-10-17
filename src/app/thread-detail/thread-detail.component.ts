import {Component, OnInit} from '@angular/core';
import {Thread, THREADS} from '../thread';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {

  id: any;
  threads = THREADS;
  thread: Thread;

  constructor(
    private route: ActivatedRoute
  ) { }

  delete(id) {
    // tslint:disable-next-line:only-arrow-functions
    const removeIndex = this.threads.map(function(threads) { return threads.id; }).indexOf(id);
    this.threads.splice(removeIndex, 1);
  }

  ngOnInit() {
    /*
    paramMap Zugriff auf Parameter der aktuellen Route
    switchMap checkt mit dem neuen Parameter das Array, wenn vorhanden, dann return
     */
    this.route.paramMap.pipe(
      switchMap(params => {
        if (params.get('id') !== null) {
          return of(this.threads.find(i => i.id === +params.get('id')));
        }
      })
    ).subscribe((thread: Thread) => {
      // Liest Inhalt vom zurückgegebenen Observable aus
      this.thread = thread;
    });
  }
}
