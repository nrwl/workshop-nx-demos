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


const observer = marbleLogTo("root");
const myObs$ = from([2, 30, 22, 5, 60, 1]);

myObs$.subscribe( observer );    // Original stream
myObs$
  .pipe(
    filter(x => x > 10 )         // Using filter() Operator
  )
  .subscribe( observer );
