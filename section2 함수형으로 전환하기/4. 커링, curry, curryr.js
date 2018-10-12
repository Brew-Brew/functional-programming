// 커링

// 1. _curry, _curryr
function _curry(fn){
    return function(a, b){
        return arguments.length == 2 ? fn(a,b) : function(b) { return fn(a,b); };
    }
}

var add = _curry(function(a,b) {
    return a + b;
});
var add10 = add(10);
console.log(add10(5));
console.log(add(5)(3));
console.log(add(5,3));

var sub = _curry(function(a,b){
  return a - b;
});

console.log(sub(10,5));

var sub10 = sub(10);
console.log(sub10(5));

//결과는 5인데, 위는 어색하다! 오른쪽부터 적용시키는 curryr을 구현해보자.

function _curryr(fn) {
  return function(a, b){
    return arguments.length == 2 ? fn(a,b) : function(b) { return fn(b,a); };
  }
}

var sub = _curryr(function(a,b) {
  return a - b;
});

sub(10,5);
//결과 5

var sub10 = sub(10);
console.log(sub10(5));
//결과 -5, curry 였을때는 5로 나왔던것과 비교

// 2. _get을 만들어 좀 더 간단하게 하기
var _get = _curryr(function(obj, key){
  return obj == null ? undefined : obj[key];
});

var user1 = users[0];
console.log(user1.name);
console.log(_get(user1,'name'));

console.log( users[10].name);
console.log(_get(users[10],'name'));

var get_name = _get('name');
console.log(get_name(user1));