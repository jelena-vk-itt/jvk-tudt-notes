import { Observable, of, map, interval, fromEvent, timestamp } from "rxjs";


// const foo = new Observable((subscriber) => {
//     console.log('Hello');
//     subscriber.next(42);
//     subscriber.next(100);
//     subscriber.next(200);
//     setTimeout(() => {
// 	subscriber.next(300); // happens asynchronously
//     }, 1000);
//     subscriber.complete("yay");
// });


// const observer = {
//     next: x => console.log('Observer got a next value: ' + x),
//     error: err => console.error('Observer got an error: ' + err),
//     complete: () => console.log('Observer got a complete notification'),
// };


// foo.subscribe(observer);


// of(1, 2, 3)
//   .pipe(map((x) => x * x))
//   .subscribe((v) => console.log(`value: ${v}`));


// const observable = interval(1000 /* number of milliseconds */);
// observable.subscribe((v) => console.log(`value: ${v}`));


const clicks = fromEvent(document, 'click').pipe(timestamp());
clicks.subscribe(x => console.log(x));
