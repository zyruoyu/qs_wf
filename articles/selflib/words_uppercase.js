const name = "aaa bbb ccc";
// // 将此字符串里的每个单词首字符变成大写 Aaa Bbb Ccc
// var strs = name.split(" ");
// for(let i = 0, len = strs.length; i < len; i++) {
//     strs[i] = strs[i].charAt(i).toUpperCase() + strs[i].slice(1, strs[i].length);
// }

// console.log(strs);

// replace 的高级使用方法
const str2 = name.replace(
    // \s 空白符  \b 单词的开头  \w 匹配a-z A-Z 0-9 这样的字符
    /\b\w+\b/g, function(word) {
        console.log(word);
        // return word.substring(0, 1).toUpperCase() + word.substring(1);
    }
)
// console.log(str2);
const str3 = {
    lll:function(word){
        console.log(word);
    }
}

