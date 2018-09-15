/* 순수함수 */
function add(a,b){
    return a+b;
}

console.log(add(10,5));

// 순수함수는 동일한 인자를 주면 동일한 결과를 냄, 평가 시점이 중요하지 않음, 조합성이 좋아짐

/* 순수함수가 아닌 함수1 */
var c = 10;
function add2(a,b){
    return a+b+c;
}

console.log(add2(10,5));
c=20;
console.log(add(10,5));

/*순수함수가 아닌 함수2 (부수효과가있는 함수)*/
c=20;
function add3(a,b){
    c=b;
    return a+b;
}
console.log(c); //결과20
console.log(add3(20,30));
console.log(c); //결과30 -> 부수효과

/* 순수 함수가 아닌 함수3 */
var obj1 = {val: 10};
function add4(obj, b){
    obj.val +=b;
}
console.log(obj1.val);
add4(obj1,20);
console.log(obj1.val);

/*순수함수*/
var obj1 ={val:10};
function add5(obj,b){
    return {val: ovj.val + b}
}

var obj2 = add5(obj1,20);