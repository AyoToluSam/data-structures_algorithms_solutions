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



const merge = (s1, s2) => {

  let alphabets = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, 
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }

  let frstWord = s1.split("");
  let scndWord = s2.split("");
  let newWord = "";

  while (frstWord.length > 0 && scndWord.length > 0) {
    let frst = frstWord[0];
    let frstCount = 0;
    frstWord.forEach( e => {
      if (e === frst) {
        frstCount++;
      }
    });

    let scnd = scndWord[0];
    let scndCount = 0;
    scndWord.forEach( e => {
      if (e === scnd) {
        scndCount++;
      }
    });

    if (frstCount < scndCount) {
      newWord += frstWord.shift();
    } 
    else if (frstCount > scndCount) {
      newWord += scndWord.shift();
    } 
    else {
        if (alphabets[frstWord[0]] < alphabets[scndWord[0]]) {
          newWord += frstWord.shift();
        } else if (alphabets[frstWord[0]] > alphabets[scndWord[0]]) {
          newWord += scndWord.shift();
        } else {
          newWord += frstWord.shift();
        }
    }

    if (frstWord.length === 0) {
      while (scndWord.length > 0) {
        newWord += scndWord.shift();
      }
    }
    if (scndWord.length === 0) {
      while (frstWord.length > 0) {
        newWord += frstWord.shift(); 
      }
    }
  }
    
  return newWord;
}



const queryHash = (queryType, query) => {
  let hashMap = {};
  let getSum = 0;

  const qTypes = {
    insert: (qValues) => {
      hashMap[qValues[0]] = qValues[1];
      console.log(hashMap);
      return;
    },
    get: (qValues) => {
      getSum += hashMap[qValues[0]];
      console.log(hashMap, getSum);
      return;
    },
    addToKey: (qValues) => {   
      let hashArr = Object.entries(hashMap); 
      for (let i =0; i < hashArr.length; i++) {
        hashArr[i][0] = Number(hashArr[i][0]) + qValues[0];
      }
      console.log(hashArr);
      return hashMap = Object.fromEntries(hashArr);
    },
    addToValue: (qValues) => {
      for (let key in hashMap) {
        hashMap[key] += qValues[0];
      }
      console.log(hashMap);
      return;
    }
  }

  for (let i = 0; i < queryType.length; i++) {
    qTypes[queryType[i]](query[i]);
  }

  console.log(hashMap);

  return getSum;
}