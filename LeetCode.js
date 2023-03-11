const romanToInt = (s) => {
	const fig = ["I", "V", "X", "L", "C", "D", "M"];
  
	const nums = s.split("");
  let value = 0;
  
	if (1 <= s.length <= 15 && nums.every(letter => fig.includes(letter))) {
		
		const figObj = {
			I: 1,
			V: 5,
			X: 10,
			L: 50,
			C: 100,
			D: 500,
			M: 1000
		}

		console.log(value);
    
    for (let i = 0; i < nums.length; i++) {
      currentNum = Number(figObj[nums[i]]);
      nextNum = nums[i+1] != undefined ? Number(figObj[nums[i+1]]) : 0;
      prevNum = nums[i-1] != undefined ? Number(figObj[nums[i-1]]) : 1001;

      if (currentNum >= nextNum && currentNum <= prevNum) {
        value += currentNum;
      } else if (currentNum < nextNum) {
          value += nextNum - currentNum;
      } else if (currentNum > prevNum) {
        continue;
      }
      console.log(value);
    }
    return value;
	}
}



const intToRoman = (num) => {

  if (1 <= num <= 3999) {
    const dp1 = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      0: ""
    }
    const dp2 = {
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      9: "XC",
      0: ""
    }
    const dp3 = {
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM",
      0: ""
    }
    const dp4 = {
      1: "M",
      2: "MM",
      3: "MMM",
    }
    
    let digits = num.toString();
    let numLength = digits.length;
	  let value = "";
        
    if (numLength == 4) {
      value = dp4[digits[0]] + dp3[digits[1]] + dp2[digits[2]] + dp1[digits[3]];
    } else if (numLength == 3) {
      value = dp3[digits[0]] + dp2[digits[1]] + dp1[digits[2]];
    } else if (numLength == 2) {
      value = dp2[digits[0]] + dp1[digits[1]];
    } else {
      value = dp1[digits[0]];
    }

    return value;

  } 
  else {
    return "Incorrect input";
  }
};



let numberToWords = (num) => {
  if (0 <= num <= (2^31 - 1)) {
    const numTree = {
      hundreds: {
      1: "One Hundred",
      2: "Two Hundred",
      3: "Three Hundred",
      4: "Four Hundred",
      5: "Five Hundred",
      6: "Six Hundred",
      7: "Seven Hundred",
      8: "Eight Hundred",
      9: "Nine Hundred",
      0: ""
      },
      tens: {
      1: "",
      2: "Twenty",
      3: "Thirty",
      4: "Forty",
      5: "Fifty",
      6: "Sixty",
      7: "Seventy",
      8: "Eighty",
      9: "Ninety",
      0: ""
      },
      oneTens: {
      1: "Eleven",
      2: "Twelve",
      3: "Thirteen",
      4: "Fourteen",
      5: "Fifteen",
      6: "Sixteen",
      7: "Seventeen",
      8: "Eighteen",
      9: "Nineteen",
      0: "Ten"
      },
      units: {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        0: ""
        }
    }

    const digits = num.toString().split("");
    let word = [];

    let wordObj = {
      Billion: [],
      Million: [],
      Thousand: [],
      Hundred: []
    }

    while (digits.length !== 0) {
      while (wordObj.Hundred.length !== 3 && digits.length !== 0) {
        wordObj.Hundred.unshift(digits.pop());
      }
      while (wordObj.Thousand.length !== 3 && digits.length !== 0) {
        wordObj.Thousand.unshift(digits.pop());
      }
      while (wordObj.Million.length !== 3 && digits.length !== 0) {
        wordObj.Million.unshift(digits.pop());
      }
      if (digits.length !== 0) {
        wordObj.Billion.unshift(digits.pop());
      }
    }

    Object.entries(wordObj).forEach( ([place, values]) => {
      console.log(place, values)
      if (values.length !== 0) {
        if (values.length == 1) {
          if (values[0] == 0) {
            word.push("Zero");
          }
          else {
            word.push(numTree.units[values[0]]);
          }
        }
        else if (values.length == 2) {
          if (values[0] == 1) {
            word.push(numTree.oneTens[values[1]]);
          }
          else {
            if (numTree.tens[values[0]] !== undefined) {
              word.push(numTree.tens[values[0]]);
            }
            if (numTree.units[values[1]] !== undefined) {
              word.push(numTree.units[values[1]]);
            }
          }
        }
        else {
          if (values[1] == 1) {
            if (numTree.hundreds[values[0]] !== undefined) {
              word.push(numTree.hundreds[values[0]]);
            }
            if (numTree.oneTens[values[2]] !== undefined) {
              word.push(numTree.oneTens[values[2]]);
            }
          }
          else {
            if (numTree.hundreds[values[0]] !== undefined) {
              word.push(numTree.hundreds[values[0]]);
            }
            if (numTree.tens[values[1]] !== undefined) {
              word.push(numTree.tens[values[1]]);
            }
            if (numTree.units[values[2]] !== undefined) {
              word.push(numTree.units[values[2]]);
            }
          }
        }
        if (place !== "Hundred") {
          if (!(values[0] == 0 && values[1] == 0 && values[2] == 0)) {
            word.push(place);
          }
        }
      }
    })

    // Object.entries(wordObj).forEach( ([place, values]) => {
    //   if (values.length !== 0) {
    //     if (values.length == 1) {
    //       if (values[0] == 0) {
    //         word.push("Zero");
    //       }
    //       else {
    //         word.push(numTree.units[values[0]]);
    //       }
    //     }
    //     else if (values.length == 2) {
    //       if (values[0] == 1) {
    //         word.push(numTree.oneTens[values[1]]);
    //       }
    //       else {
    //         word.push(numTree.tens[values[0]]);
    //         word.push(numTree.units[values[1]]);
    //       }
    //     }
    //     else {
    //       if (values[1] == 1) {
    //         word.push(numTree.hundreds[values[0]]);
    //         word.push(numTree.oneTens[values[2]]);
    //       }
    //       else {
    //         word.push(numTree.hundreds[values[0]]);
    //         word.push(numTree.tens[values[1]]);
    //         word.push(numTree.units[values[2]]);
    //       }
    //     }
    //     if (place !== "Hundred") {
    //       if (!(values[0] == 0 && values[1] == 0 && values[2] == 0)) {
    //         word.push(place);
    //       }
    //     }
    //   }
    // })
    // let i = 0;
    // while (i < (word.length+1)) {
    //   word.forEach( (w, index) => {
    //     if (w.length < 1) {
    //       word.splice(index, 1);
    //     }
    //   })
    //   i++;
    // }

    const newWord = word.join(" ");
    return newWord;
  }
  return newWord;
};




const commonChars = (words) => {
  
  let letters = [];

  for (let i = 0; i < words[0].length; i++) {
    if (words.every(word => word.includes(words[0][i]))) {
      letters.push(words[0][i]);
      words = words.map(word => word.replace(words[0][i], " "));
    }
  }
  return letters;
};




const balancedStringSplit = (s) => {
  let arr = s.split("");
  let count = 0;

  let num = 0;    
  while (num < arr.length) {
    let rCount = 0;
    let lCount = 0;
    do {
      if (arr[num] === "R") {
        rCount++;
      }
      else if (arr[num] === "L") {
        lCount++;
      }
      num++;
    } while (rCount !== lCount); 
    count++;
  }
  return count;
};



const twoSum = (nums, target) => {
  let sum = 0;
  let arr = [];
  
  let i = 0;
  do {
    for (let j = (i+1); j < nums.length; j++) {
      sum = nums[i] + nums[j]
      arr = [i, j];
      if (sum == target) break;
    } 
    i++
  } while (sum !== target);
  return arr;
};


