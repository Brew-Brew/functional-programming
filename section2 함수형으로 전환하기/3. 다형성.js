// [내부 다형성]
// 1. predicate, iterate, mapper (보조함수,콜백함수)
    // 함수가 아니라 메서드이다. map과 filter
    // - 메서드는 객체지향 프로그래밍
    // - 메서드는 해당클래스에 정의, 해당인스턴스에서만 사용

// [array like 객체]
    // map 함수 실행 불가
    // $('div')
    // document.querySelectorAll('body')-> constructor node list 
    // 다형성 지원이 어려움

// 아래의 map함수 사용하면 다형성 적용
// 다형성 높게 프로그래밍 가능
// 함수가 먼저 나오는 프로그래밍
function _map(list, mapper){
    var new_list = [];
    _each(list, function(val){
        new_list.push(mapper(val));
    });
    return new_list;
}
// array like 객체에도 map 함수 적용 가능
// 조합성 증가
console.log(
        _map(document.querySelectorAll('*'), function(node){
            return node.nodeName;
    })
);