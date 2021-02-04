function stopClock() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const clock1 = stopClock();
const clock2 = stopClock();

console.log(clock1());
console.log(clock1());
console.log(clock1());

console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
