/**
*   Given this endorsements array, structure the data to result in the following
*/
var endorsements = [
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'css', user: 'Bill' },
  { skill: 'html', user: 'Sue' }
];

// Result

//[
//  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//  { skill: 'html', user: [ 'Sue' ], count: 1 }
//];

function(endorsements){
    
    endorsements.reduce(function(map, curr){
        if(map[curr.skill] === 'undefined'){
            map[curr.skill] = {skill: curr.skill, user: [], count: 0};
        }
        map[curr.skill]
        
        return map;
    }, {});
}