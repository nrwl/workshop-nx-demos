import { marbleLogTo } from './console-log';

// RxJS Imports
import { Scheduler } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { forkJoin }    from 'rxjs/observable/forkJoin';
import { defer }    from 'rxjs/observable/defer';
import { interval } from 'rxjs/observable/interval';
import { timer }    from 'rxjs/observable/timer';
import { from }     from 'rxjs/observable/from';
import { of }       from 'rxjs/observable/of';

import {
  switchMap, map, concat, flatMap, merge,
  startWith, filter, takeWhile, bufferCount,
  tap, concatMap, delay, debounceTime, distinctUntilChanged
} from 'rxjs/operators';

// ************************************
// Demo Code
// ************************************


const observer = marbleLogTo("root");
let obs1$ = of(1, 2);
let obs2$ = of(3, 4);
let obs3$ = of(5, 6);

// Emit most-recent value of each observable...
// grouped as a single emitted value
forkJoin(obs1$, obs2$, obs3$).subscribe( observer );
