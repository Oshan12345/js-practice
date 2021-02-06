//console.log(window);

var x = "hello";

function sum(a, b) {
  var y = "hi";

  var x = "hellooooooo";
  z = "hiiiiiiiiiiiiiiiiiiiiiiiiiii";
  console.log(x);
  console.log(y);
  console.log(z);
}

sum(3, 4);
console.log(x);
console.log(z);
function doubletotal(a, b) {
  const sum = a + b;

  function doubleIt(num) {
    return num * 2;
  }
  const result = doubleIt(sum);

  return result;
}

const input = doubletotal(3, 4);
console.log(input);

console.log(doubletotal);
//global scope

//console.log(doubleIt);
//can't access it,because it is in local scope
