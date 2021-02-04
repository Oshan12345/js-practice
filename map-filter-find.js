//squareing all the number of an array
//normal way
// const number = [1, 2, 3, 4, 54, 6, 7, 8];
// const squaredArray = [];
// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   let result = element * element;
//   squaredArray.push(result);
// }
//console.log(squaredArray);

const number = [1, 2, 3, 4, 54, 6, 7, 8];

const squaredNumbers = number.map((element, index, array) => {
  //3 parameters can be passed element,index,array
  // console.log(array);
  return element * element;
});

const cubeNumbers = number.map(
  (element, index, array) => element * element * element
);

//map can be used alternative of for loop

const result = number.filter((x) => x > 5);
console.log(result);

const result2 = number.find((x) => x > 5);
console.log(result2);
//find will provide first value
