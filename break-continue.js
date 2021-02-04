const nums = [1, 2, 3, 4, 5, 6, 9, 7, -4, -5, -3, 44, 34, -45];

for (let index = 0; index < nums.length; index++) {
  const element = nums[index];
  // console.log(element);
  if (element > 5) {
    break;
  }
  // console.log(element);
}

for (let index = 0; index < nums.length; index++) {
  const element = nums[index];
  // console.log(element);
  if (element < 0) {
    continue;
  }
  console.log(element);
}
