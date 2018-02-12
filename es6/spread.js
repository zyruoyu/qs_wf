// 食品小店 做披萨pizza
//常量 es6 先考虑const let let更安全
// var 基本不用
//const 值的类型不能变 除了基本类型外，值是可变的
// const variable
// const name = 'zyruoyu';
// name = 'zyry';
const featured = ['Deep Dish','Pepperoni','Hawaiian'];
featured.push('芝士');
// console.log(featured);
// featured = {'enheng':'123'};
const specialty = ['Meatzza','Spicy Mama','Marghrita'];
// const pizzas = featured.concat(specialty);
const pizzas = [...featured,'vegetable',...specialty];
console.log(pizzas); 

const fridayPizza = [...pizzas];