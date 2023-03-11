//

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