import { marbleLogTo } from './console-log';

// RxJS Imports
import { Scheduler } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { defer }    from 'rxjs/observable/defer';
import { interval } from 'rxjs/observable/interval';
import { timer }    from 'rxjs/observable/timer';
import { from } from 'rxjs/observable/from';
import { of }       from 'rxjs/observable/of';

import {
  switchMap, map, concat,
  startWith, filter, takeWhile, bufferCount,
  tap, concatMap, delay
} from 'rxjs/operators';

// ************************************
// Demo Code
// ************************************

const myObs$ = Observable.create( observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);

  observer.complete();
});

myObs$.subscribe( marbleLogTo("root") );    // Original stream

myObs$
  .pipe(
    map(x => 10 * x )                       // Using Map() Operator
  )
  .subscribe( marbleLogTo("root") );
