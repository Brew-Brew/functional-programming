/* 일급함수 */

var f1 =function(a) {return a*a;
console.log(f1);

var f2 = add;
console.log(f2);

// 함수를 받아서 그결과를 return
function f3(f){
    return f();
};

console.log(f3(function(){return 10;}));
console.log(f3(function(){return 20;}));

//일급함수와 순수함수를 이용해 조합성을 증가시킴, 다양한 로직 만듬 -> 함수형 프로그래밍

/* add_maker */

function add_maker(a) {
    return function(b){ // a를 기억하는 클로저 이기도 함.
        return a + b;
    }
}

var add10 = add_maker(10);
console.log(add10(20));

function f4(f1,f2,f3){
    return f3(f1() + f2());
};

console.log(f4(
    function() {return 2;},
    function() {return 1;},
    function(a) {return a*a;}));

// 원하는 시점에 평가
// 비동기가 일어나는 시점의 평가 , for문에서 받아둔 함수를 여러번 실행한다던지.. 등등에서 활용가능