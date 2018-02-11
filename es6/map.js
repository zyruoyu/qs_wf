// 如何手动实现Array.prototype.map
var originArr = [1,2,3,4,6];
var arr = [1,2]
// var newArr = originArr.map(item =>{
//     return item*3;
// })
// console.log(newArr);

// 手动实现 es6 -> es5 手写 
// 闭包 高阶函数 作用域

// 封装一个函数
// 顺序流程化具象解决问题
// 一个数组每一项都*3 并返回3个数组
// function multiplyByThree(Arr){
//     var newArr = [];
//     for( var i =0 ,len = Arr.length;i<len;i++){
//         newArr.push(Arr[i]+28);
//     }
//     console.log(newArr);
// }
// multiplyByThree(arr);
// function ()
// 如果要*5怎么办

// function timesThree(items){
//     return items*3;
// }
// function timesFive(items){
//     return items*5;
// }
// function makeUpperCase (items){
//     return items.toUpperCase();
// }
// // 函数内部可以分为几个函数
// function map(arr,fn){//高阶函数 函数做为参数或者返回值
//     var newArr = [];
//     for(var i =0;i<arr.length;i++){
//         newArr.push(fn(arr[i]))
//     }
//     console.log(newArr);
// }
// map(arr,timesFive);
// map(['a','b',  'c'],makeUpperCase);


Array.prototype.map = function(fn){
    newArr = [];
    console.log(this);
    for(var i = 0;i<this.length;i++){
        newArr.push(fn(this[i],i,this))
    }
    return newArr;
}

var newArr =  originArr.map(function(item,index,arr){
    return item *index;
})
console.log(newArr);