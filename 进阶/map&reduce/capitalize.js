'use strict';

function normalize(arr) {
    return arr.map(function(x){ return x.replace(/^(\w)(\w+)/,function(x,y,z){return y.toUpperCase()+z.toLowerCase();})});
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
};

//  console.log(['adam', 'LISA', 'barT'].map(function(x){ return x.replace(/^(\w)(\w+)/,function(x,y,z){return y.toUpperCase()+z.toLowerCase();})}));