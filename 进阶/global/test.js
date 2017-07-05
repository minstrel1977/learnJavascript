//global中常用的变量
console.log(__dirname);//存放在node.js中执行的js代码所在的绝对目录。注意：前面有两个下划线。 如：console.info(__dirname);  h:\node
console.log(__filename);//存放在node.js中执行的js代码所在的文件全路径及文件名。

//global中的console
console.log("This is a log");
console.info("This is an info");
console.error("This is a error");
console.warn("This is a warn");
/*我们可以使用cmd中的日志重定向功能，来验证。node xx.js >log.txt   将程序运行的结果重定向到 log.txt这个文件中去
此时我们可以发现，log()和info()方法中的信息被写入了日志文件，而warn()和error()中的信息却显示在cmd中
那么如果将warn()和error()中的信息重定向到文件中呢？ node xx.js 1>log.txt 2>err.txt。1代表普通的日志信息，2代表有错误的日志信息
如果我们想把错误信息也输出到log.txt中而不是分开写入到两个文件中，我们可以通过如下方式实现：node xx.js 1>log.txt 2>&1*/

console.time('test'); //任意的字符串，保证前后一致
for (var i = 0; i < 100000; i++) { }
console.timeEnd('test');

//global中的console
/*process存放程序执行的一些相关信息
输出：process.stdout/process.stderr
输入：process.stdin
process.cwd(); //输出我们执行node命令所在的绝对路径，而__dirname是输出我们执行js文件所在的绝对路径
process.stdout：standard output 标准输出
process.stderr：standard error  标准错误输出
console的输出方法实际上就是调用的process.stdout和process.stderr来完成的。*/
process.stdout.write('This is stdout...');
process.stderr.write('This is stderr...');

// process.stdin案例
process.stdout.write('请输入：');
process.stdin.setEncoding('utf-8'); //设置编码集
process.stdin.on('data', function (data) {//监听用户的输入信息，用户的输入信息会被自动保存到回调函数的data中
    console.info(data);
});
process.stdout.write('请输入：');
process.stdin.setEncoding('utf-8'); //设置编码集
process.stdin.on('readable', function () { //当有信息可以读取时触发，此时回调函数中没有参数，我们只能通过一下方式获取用户的输入
    console.info(process.stdin.read()); //读取用的输入
}); //监听用户的输入