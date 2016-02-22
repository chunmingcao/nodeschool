function arrMap(nums, fn, arr){
    return nums.reduce(function(map, curr, arr){
        map.push(fn.call(arr, curr));
        return map;
    }, []);
    //return mapped;
}

module.exports = arrMap;