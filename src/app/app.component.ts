import { Component } from '@angular/core';
import { interval, of, merge, pipe, concat } from 'rxjs';
import { mergeMap, take, tap, map, concatMap, flatMap, switchAll, switchMap, exhaust, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor() {
    let numberStream$ = interval(500); 
    let numberStream2$ = interval(1000);
    let alphsStream$ = of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');

    /*concat(numberStream$.pipe(take(5)), alphsStream$)
    .subscribe(
      (val) => console.log(val),
      (err) => console.log(err),
      () => console.log('Concat --> completed!!!')
    );*/

    /*numberStream$.pipe(take(5))
    .pipe(
      concatMap(x => 
        numberStream2$
        .pipe(
          take(2),
          tap(y => console.log('outer-> ', x, 'inner-> ',y)),
          map(y => ({x, y}))
        )
      )
    )
    .subscribe(({x, y}) =>
      console.log('concatMap subs ->', x, y)
    );*/
    
  /*merge(numberStream$.pipe(take(5)), alphsStream$)
    .subscribe(
      (val) => console.log(val),
      (err) => console.log(err),
      () => console.log('merge --> completed!!!')
    );*/

  /*numberStream$.pipe(take(5))
    .pipe(
      mergeMap(x => 
        numberStream2$
          .pipe(
            take(2),
            tap((y) => console.log('Outer-> ', x, 'inner-> ', y)),
            map(y => ({x, y}))
          )
      )
    ).subscribe(
      ({x, y}) => console.log('subs->', x, y)
    )*/

    /*numberStream2$.pipe(take(5)) 
    .pipe(
      switchMap(x =>
        numberStream$
          .pipe(
            take(3),
            tap(y => console.log('outer-> ', x, 'inner-> ',y)),
            map(y => ({x, y}))
          )
      )
    ).subscribe(({x, y}) =>
      console.log('switchMap subs ->', x, y)
    );*/

    /*numberStream$.pipe(take(20)) 
    .pipe(
      exhaustMap(x => 
        numberStream2$
          .pipe(
            take(5),
            tap(y => console.log('outer-> ', x, 'inner-> ', y)),
            map(y => ({x, y}))
          )
      )
    )
    .subscribe(({x, y}) =>
      console.log('exhaustMap subs-> ', x, y)
    );*/
  }
}