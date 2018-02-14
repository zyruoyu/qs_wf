
var arr = [2,4,6,8,10,11];
//    const newArr =  arr.filter(item =>{
//         return item>5;
//     });
// console.log(newArr);
function filterLessThanFive(item){
    return item > 5;
}
function filterOdd(item){
    return (item%2) !=0;
}
function filter(arr,testfunction) {
    var filteredArr = [];
    for(var i=0;i<arr.length;i++) {
        if (testfunction(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
   console.log(filteredArr);
}

// console.log(filter(arr,filterOdd));
filter(arr,filterLessThanFive);
filter(arr,filterOdd);