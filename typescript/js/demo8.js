// 类型断言
// 通过类型断言这种方式可以告诉编译器，"相信我，我知道自己在干什么"。类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。TypeScript会假设你，程序员，已经进行了必须的检查。类型断言有两种形式。其一是"尖括号"语法，另一个为as语法
var getLength = function (str) {
    if (str.length) {
        return str.length;
    }
    else {
        return str.toString().length;
    }
};
console.log(getLength('123456'));
