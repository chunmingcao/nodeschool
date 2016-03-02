var inputs = process.argv.slice(2);
var result = inputs.map(value => {return value.charAt(0)})
                    .reduce((soFar, value) => {return soFar + value}, '');

console.log(`[${inputs}] becomes "${result}"`);
