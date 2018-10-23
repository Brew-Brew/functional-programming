
// array like 객체에 slice 적용 위한것
var slice = Array.prototype.slice;
function _rest(list, num){
    return slice.call(list, num || 1);
}

// reduce 만들기
function _reduce(list, iter, memo) {

    if(arguments.length ===2){
        memo = list[0];
        list = _rest(list);
    }
    _each(list, function(val){
        memo = iter(memo, val);
    })
    return memo;
}

console.log(
_reduce([1,2,3,4], add, 0));

console.log(
    _reduce([1,2,3,4], add));