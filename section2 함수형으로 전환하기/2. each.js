function _filter(users, predi) {
    var new_list = [];
    _each(list, function(val){
        if(predi(users[i])){
            new_list.push(val);
        }
    });
    return new_list
}

// 재사용성 극대화
function _map(list, mapper){
    var new_list = [];
    _each(list, function(val){
        new_list.push(mapper(val));
    });
    return new_list;
}

function _each(list, iter) {
    for(var i=0; i< list.length; i++){
        iter(list[i]);
    }
    return list;
}