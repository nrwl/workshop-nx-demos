import { marbleLogTo } from './console-log';

// RxJS Imports
import { Scheduler } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { concat }    from 'rxjs/observable/concat';
import { defer }    from 'rxjs/observable/defer';
import { interval } from 'rxjs/observable/interval';
import { timer }    from 'rxjs/observable/timer';
import { from }     from 'rxjs/observable/from';
import { fromEvent} from 'rxjs/observable/fromEvent';
import { of }       from 'rxjs/observable/of';

import {
  switchMap, map, flatMap, merge, scan,
  startWith, filter, takeWhile, bufferCount, take,
  tap, concatMap, delay, debounceTime, distinctUntilChanged
} from 'rxjs/operators';

// ************************************
// Demo Code
// ************************************
const observer = marbleLogTo("root");

let obs1$ = of(1, 2, 3, 4, 5, 6);

    // Emit stream values
    obs1$.subscribe( observer );

    // Emit values with accumulator function...
    obs1$
      .pipe(
        scan((x, y) => x + y)
      )
      .subscribe( observer )
