import { marbleLogTo } from './console-log';

// RxJS Imports
import { Scheduler } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { defer }    from 'rxjs/observable/defer';
import { interval } from 'rxjs/observable/interval';
import { timer }    from 'rxjs/observable/timer';
import { from }     from 'rxjs/observable/from';
import { of }       from 'rxjs/observable/of';

import {
  switchMap, map, concat, flatMap,
  startWith, filter, takeWhile, bufferCount,
  tap, concatMap, delay, debounceTime, distinctUntilChanged
} from 'rxjs/operators';

// ************************************
// Demo Code
// ************************************


const observer = marbleLogTo("root");
const myObs$ = of(
        of(1, 2).pipe(delay(1)),  // inner observables
        of(3, 4).pipe(delay(1)),
        of(5, 6).pipe(delay(1))
      );

myObs$.subscribe( observer );    // Original stream
myObs$
  .pipe(
    switchMap(x => x)              // Using debounceTime() Operator
  )
  .subscribe( observer );
