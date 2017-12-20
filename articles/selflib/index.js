// js 全局变量 js bad parts
// const 和 立即执行函数放在一起 减少空间的污染（将多个key value污染全局的函数，用命名空间作为一个代表）
const Ting = {
    // es6 中 json 的简写
    trim (str, type) {
        // trim 有兼容性。   手动实现一个trim
        // 正则表达式 \s 表示空格  /regExp对象/ + 出现一次或多次
        // 贪婪匹配
        // /\s/ 匹配一次就会停止匹配     /\s/g 是全局匹配，匹配完所有符合条件的

        // 1 去除前后的空格  str.replace(/(^\s+)|(\s+$)/g, "")
        // 2 去除左边的空格  str.replace(/(^\s+)/g, "")
        // 3 去除右边的空格  str.replace(/(\s+&)/g, "")
        // 4 去除所有的空格  str.replace(/\s+/g, "")
        
        switch(type) {
            case 1:
                return str.replace(/(^\s+)|(\s+$)/g, "");
            case 2:
                return str.replace(/(^\s+)/g, "");
            case 3:
                return str.replace(/(\s+&)/g, "");
            case 4:
                return str.replace(/\s+/g, "");
        }

        // return str.replace(/\s+/, "");
    }
};
const strHello = 'Hello Baidu';
console.log(strHello.replace("Baidu", "Google"));
// console.log(Ting.trim(" m mm "));
// 立即执行函数的妙用,对象的封装。比传统方式的优点：方便提供私有的属性和方法
const user = (function() {
    let _name = 'sven', _age = 19;
    function homeAdress() {

    }
    // 闭包的魔法
    return {
        // 形成了闭包 closure 函数运行时的上下文环境
        getUserInfo: function() {
            return _name + ', 年方' + _age;
        }
    }
})();
// 立即执行函数已经运行，但是内部却又返回，可以在任何时刻被执行
// 立即执行函数没有返回值,直接打印的结果是undefined.因为返回值就是undefined
console.log(user.getUserInfo());

// 上下文环境 context
// 在立即函数执行的 闭包函数（白雪公主） 被定义了（毒死），引用的变量、函数都可以被调用
// 在闭包的夹层里的变量得永生
// 如果没有return形成闭包 返回那些变量  那么定义在立即执行函数中的变量就会被回收

// 立即执行函数 能创建闭包

// const Teel = {
//     sayHello: function() {
//         console.log("hello, world");
//     }
// };
// (function() {
//     return Teel;
// })();

// 在立即执行函数之前会加一个 ! 用于截断之前的代码
// 给立即执行函数传递一个参数
// !(function(global) {
//     // 直接挂在window上  不会污染空间
//     global.Teel = {
//         sayHello: function() {
//             console.log("hello, world");
//         }
//     }
// })(window);