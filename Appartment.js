/*
Imagine a lady wants to rent an appartment in a community that has 
different blocks. Each block is guaranteed to have an appartment she
could rent but her condition to rent on any block is proximity
to the buildings she requires e.g. Church, Supermarket, etc.
The community is guaranteed to have at least one of such buildings in
any of the blocks.
Now she wants to know, and more importantly minimize the farthest distance
that she has to move in order to access all of the required buildings.

For example, if Church is in block 1 but Supermarket is all the way in
block 5, whereas in block 5, there is no church but a church is just above in
block 4. It makes block 5 more suitable for her than block 1 because in
block 5 the farthest distance she has to move in order to access both 
Church and Supermarket is 1 compared to a distance of 4 if she's in block 1.
*/

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

  const maxDistances = results.map((result) => Math.max(...Object.values(result)));

  const minDistance = Math.min(...maxDistances);

  const blockIndex = maxDistances.indexOf(minDistance)
  
  console.log("The minimum distance before finding all requirements is: ", minDistance)
  console.log("The suitable block is: ", blockIndex)
}


findAppartment(buildingBlocks, requirements);


