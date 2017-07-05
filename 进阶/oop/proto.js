'use strict';
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student;
console.log(xiaoming.__proto__ === Student);
console.log(Student.__proto__ === Object.prototype);//对象向上的原型链和函数的原型链 Object是一个Constructor函数
console.log(Object.__proto__.__proto__ === Object.prototype);


function Cat(name) {
    this.name = name;
}
Cat.prototype.say = function() { return 'Hello, ' + this.name + '!'};
// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
console.log(kitty.say());
console.log(doraemon.say());
