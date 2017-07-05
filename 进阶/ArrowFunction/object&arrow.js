// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
'use strict';
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON1: () => ({ 'Name': this.name, 'Age': this.age }),
    toJSON2: () => {
        return () => ({ 'Name': this.name, 'Age': this.age });
    },
    toJSON3: function () { return { 'Name': this.name, 'Age': this.age }; },
    toJSON4: function () {
        var fn = () => ({ 'Name': this.name, 'Age': this.age })
        return fn();
    }
}
console.log(xiaoming.toJSON1());//{ Name: undefined, Age: undefined }
console.log(xiaoming.toJSON2()());//{ Name: undefined, Age: undefined }
console.log(xiaoming.toJSON3());//{ Name: '小明', Age: 14 }
console.log(xiaoming.toJSON4());//{ Name: '小明', Age: 14 }

//这里说一下输出差异是因为：在http://es6.ruanyifeng.com/#docs/function#使用注意点  中有说明：箭头函数里面根本没有自己的this，而是引用外层的this；而普通函数的作用域是调用它的对象的作用域

function foo() {
    console.log('id:', this.id + 1);
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });

function foo1() {
  return () => {
    return () => {
      return () => {
        console.log('id1:', this.id1);
      };
    };
  };
}

var f = foo1.call({id1: 1});

var t1 = f.call({id1: 2})()(); // id: 1
var t2 = f().call({id1: 3})(); // id: 1
var t3 = f()().call({id1: 4}); // id: 1
// 下面嵌套的箭头函数实现链式操作太完美了
let insert = (value) => ({into: (array) => ({after: (afterValue) => {
  array.splice(array.indexOf(afterValue) + 1, 0, value);
  return array;
}})});

insert(2).into([1, 3]).after(1); //[1, 2, 3]