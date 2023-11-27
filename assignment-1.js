function fibs(n) {
  let fibArray = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fibArray.push(i);
    } else {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
  }
  return console.log(fibArray);
}

const fibArray = [0, 1];
function fibsRec(n) {
  if (fibArray.length === n) {
    return console.log(fibArray);
  } else {
    fibArray[fibArray.length] =
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibsRec(n);
    return;
  }
}

fibs(8); // [0, 1, 1, 2, 3, 5, 8, 13]
fibsRec(8);
