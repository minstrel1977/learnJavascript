function codePointLength(text) {
  let result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

let s = '𠮷𠮷陈翬',b='\t\v';
console.log(s);
console.log(s.length); // 4
console.log(codePointLength(s));// 2
console.log(b.length); // 4
console.log(codePointLength(b));// 2

var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);