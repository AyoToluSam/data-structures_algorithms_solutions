/*
This function merges two words into a new language based on a set 
of rules.
*/


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