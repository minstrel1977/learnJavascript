'use strict';
var arr=[123,11,"ac",10,"xs"];
console.log(arr.sort().reverse().sort(function(x,y){return x-y;}));