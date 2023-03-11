//

const prisonAfterNDays = (cells, n) => {
  if(n % 14 === 0){  // array repeats after every 14 iterations
    n = 14;
  }
  else {
    n = n % 14;
  }
  
  let i = 0;
  while (i < n) {
    let newCells = [];
    for (let j = 0; j < cells.length; j++) {
      let prev = cells[j-1];
      let next = cells[j+1];
      
      if (prev === undefined || prev !== next || next === undefined) {
        newCells.push(0);
      }
      else if (prev == next) {
        newCells.push(1);
      }
    }
    cells = newCells;
    i++;
  }
  return cells;
};