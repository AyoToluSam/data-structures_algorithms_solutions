const buildingBlocks = [
  {
    "gym": false,
    "school": true,
    "store": false
  },
  {
    "gym": true,
    "school": false,
    "store": false
  },
  {
    "gym": true,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "school": true,
    "store": true
  },
];

const requirements = ["gym", "school", "store"];

const findAppartment = (blocks, reqs) => {

  let results = [];
  
  let distanceObj = reqs.reduce((acc, curr) => ({ ...acc, [curr]: 0 }), {});
  
  for (let i = 0; i < blocks.length; i++) {
    
    let distance = {...distanceObj};
        
    reqs.forEach(req => {
      if (!blocks[i][req]) {
        let trueArray = [];
        for (let j = 0; j < blocks.length; j++ ) {
          if (blocks[j][req]) {
            trueArray.push(Math.abs(i - j));
          }
        }
        distance[req] = Math.min(...trueArray);
      }
    });
    results.push(distance);
  };

  console.log("Distances of requirements in each block: ", results);

  const maxDistances = results.map((result) => {
    return Math.max(...Object.values(result));
  })

  const minDistance = Math.min(...maxDistances);

  const blockIndex = maxDistances.indexOf(minDistance)
  
  console.log("The minimum distance before finding all requirements is: ", minDistance)
  console.log("The suitable block is: ", blockIndex)
}

findAppartment(buildingBlocks, requirements);


