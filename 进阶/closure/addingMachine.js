'use strict';
//这个函数实现第一次调用返回x+1,相当于func(0)=1，两次调用func(func(x))返回x+2，n次调用返回x+n
function func(x) {
    return x > 0 ? x + 1 : 1;
}
// 定义数字0:
/*var zero = function (f) {
    return function (x) {
        return x > 0 ? x : 0;
    }
};*/

// 定义数字1:
//这里一定要理解第一次执行时返回function (x) { return f(x);}；再次调用时返回f(x);
var one = function (f) {
    return function (x) {
        return f(x);
    }
};
var two = function (f) {
    return function (x) {
        return f(f(x));
    }
}
//这里可以发现两次调用就能剥离出可执行的函数了

// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}
//这里难点在于理解n(f)(x)相当于执行了两次调用，那就相当于求出了f(f(f(...(x)。
//如果x不传值，就相当于n(f)(x)=n，那m(f)(n）就相当于在n上加了m个1

// 计算数字2 = 1 + 1: 这个也能执行
// var two = add(one, one);

// 计算数字3 = 1 + 2:
var three = add(one, two);

// 计算数字5 = 2 + 3:
var five = add(two, three);

console.log(one(func)());//one(func)第一次调用；()第二次调用返回func()
console.log(two(func)());
console.log(three(func)());
console.log(five(func)());


//只能说是初步有一点理解，让我写是绝对写不出的。