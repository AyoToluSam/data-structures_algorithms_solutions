//

const reverse = (x) => {
  const signed = x < 0 ? true : false;

  let numArr = x.toString().split("");
  let revArr = numArr.reverse();
  let revNum = 0;

  if (revArr[0] === 0) {
    revArr.unshift();
  }
  if (signed) {
    revArr.pop();
    revNum = Number(-revArr.join(""));
  }
  else {
    revNum = Number(revArr.join(""));
  }
  
  if (revNum > (Math.pow(2, 31) - 1) || revNum < -Math.pow(2, 31)) {
    return 0;
  }
  else {
    return revNum;
  }
};

/* 
For whatever reasons, the code below isn't working with "1534236469"
Even if I change using the raised power to Math.pow() method.. Same thing
if ( -(2^31) <= revNum <= (2^31)-1 ) {
  return revNum;
}
else {
  return 0;
}
But if I change the statement as such below,, it isn't working at all, just returns 0.
Unless I change using the raised power to Math.pow() method as seen in the solution above.
if (revNum > (2^31)-1 || revNum < -(2^31)) {
  return 0;
}
else {
  return revNum;
}
*/