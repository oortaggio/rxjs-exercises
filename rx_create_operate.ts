import { of, Observable, fromEvent, range, interval  } from "rxjs";
import { map, filter, take} from "rxjs/operators";

console.clear();


fromEvent(document,"click")
  .subscribe(x => console.log(x));

range(0,50)
  .subscribe(x => console.log("n:", x))

const observable = interval(1000)
.pipe(
  filter(x => x > 2),
  map(x => x * 10),
  take(5),
)

observable.subscribe(
  x => console.log(x),
  err => console.log(err),
  () => console.log('complete')
)
