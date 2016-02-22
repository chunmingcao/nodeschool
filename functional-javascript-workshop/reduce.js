function countWords(inputWords){
    
    return inputWords.reduce(function(countMap, currword){
        countMap[currword] = ++countMap[currword] || 1;

        return countMap;
    }, {});
    
}

module.exports = countWords;