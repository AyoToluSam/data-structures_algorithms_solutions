const zigZag = (numbers) => {
  let tripples =[];
  for (let i = 1; i < numbers.length-1; i++) {
    let curr = numbers[i];
    let prev = numbers[i-1];
    let next = numbers[i+1];

    if ((prev < curr && curr > next) || (prev > curr && curr < next)) {
      tripples.push(1);
    }
    else {
      tripples.push(0);
    }
  }
  return tripples;
}



const ascendSorting = (a) => {
  let b = [];

  while (a.length > 0) {
    b.push(a.shift());
    if (a.length === 0) break;
    b.push(a.pop());
  }

  let truthy = false;

  for (let i = 0; i < b.length; i++) {
    if (b[i] <= b[i+1]) {
      return truthy = true;
    } else {
      truthy = false;
      break;
    }
  }

  return truthy;
}

