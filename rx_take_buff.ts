import { of, timer, interval, from, fromEvent  } from "rxjs";
import { map, takeUntil, buffer } from "rxjs/operators";
console.clear()

of(...[1,2,3,4,5], [7,8,9])
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log("finito")
  )

/*timer(0,1000)
.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log("finito")
  )*/

of(10,20,30,40)
  .subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log("complete")
  )

const click$ = fromEvent(document, "click")

  interval(1000)
  .pipe(
    buffer(click$),
  )
  .subscribe(x => console.log(x))
