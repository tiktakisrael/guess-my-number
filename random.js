'use strict';
/*
מונה וסופר פריטים 

let cars = [
    'Honda',
    'Toyota',
    'Sussita',
    'Tesla',
    'BMW',
    'Toyota',
    'Honda',
    'Mitsubishi',
  ];
  let res = cars.reduce((total, item) => {
    total[item] = (total[item] || 0) + 1;
    return total;
  }, {});
  // console.log(res);
*/
  ///////////////////////

  /*
  הופך טקסט

  let split = input => input.split('');
let reverse = input => input.reverse();
let join = input => input.join('');
let pipeline = [split, reverse, join];
let result = pipeline.reduce((total, item) => {
return item(total);
}, prompt());
alert(result);
*/

///////////////////////////

/*
מיון ע"י יצירת מערך אחר

let l1 = [10, 23, 4, 9, '20'],
  l2 = [1, 3, 444];
var mergeTwoLists = function (l1, l2) {
  for (let i = 0; i < l2.length; i++) {
    l1.unshift(l2[i]);
  }
  let l3 = [];

  for (let x = 0; x < l1.length; ) {
    let mach = l1[0];

    for (let j = 0; j < l1.length && l1.length !== 1; j++) {
      if (mach > l1[j]) {
        mach = l1[j];
      }
    }
    l3.push(mach);

    l1.splice(l1.indexOf(mach), 1);
  }
  return l3;
};

console.log(mergeTwoLists(l1, l2));

*/

/////////////////////////////

/*
// מיון הכנסה insertion sort
let insertionSortt = function(arr){
for(let i = 0; i<arr.length; i++){
let j = i;
while(arr[j] < arr[j-1]){
// if(arr[i] < arr[i-1]){
let mach = arr[j];
arr[j] = arr[j-1];
arr[j-1] = mach;
j--;
}
}
return arr;
}
console.log( insertionSortt([7,3,9,13,81,6,7]));

*/
