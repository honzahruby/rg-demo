import { run } from "./run";

// Array.at (FF 90)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
run(() => [1, 2, 3].at(-1));

// Array.toReversed (FF 115)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed
run(() => [1, 2, 3].toReversed());

// Nullish coalescing assignment (FF 79)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
run(() => {
  const x = {};
  return (x.y ??= "hello");
});
