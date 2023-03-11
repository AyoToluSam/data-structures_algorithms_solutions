/*

A company has a build tracker which returns true or false every day
depending on if the application passed all its build tests or not.
A buildrun represents the consecutive days a build passes its tests
(referred to as green) and also includes the consecutive days it fails 
(referred to as red) until it is fixed and passes all tests again. 
The event of that fix represents the start of another buildrun, and so on.

In a bid to improve the efficiency with which they quickly fix builds and 
it passes its tests, the company wants to know:
The highest number of consecutive decrement in the percentages of green
in the buildruns.

*/


const buildRunArray = [
  [true, true, true, false, false],
  [true, true, true, true, false],
  [true, true, true, true, true, true, true, false, false, false],
  [true, false, false, false, false, false],
  [true, true, true, true, true, true, true, true, true, true, true, true, false],
  [true, false],
  [true, true, true, true, false, false]
]

const buildFixEfficiency = (buildRun) => {

let greenPercents = buildRun.map( (run) => {

  let count = 0

  for (let i = 0; i < run.length; i++) {
    if (run[i]) {count++}
    else {break}
  }

  return Math.round((count / run.length) * 100)
})

let efficiencyDecrementRun = [];

for (let i = 0; i < greenPercents.length-1; i++) {

  if (greenPercents[i-1] !== undefined) {
    if (greenPercents[i] <= greenPercents[i-1]) {
      continue
    }
  }
  let decrementRunCount = 0;
  for (let j = i; j < greenPercents.length-1; j++) {
    if (greenPercents[j] > greenPercents[j+1] ) {
      decrementRunCount++;
    }
    else {break}
  }
  efficiencyDecrementRun.push(decrementRunCount);
}
console.log(efficiencyDecrementRun);
return Math.max(...efficiencyDecrementRun);
}