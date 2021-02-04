// 枚举
// 枚举类型,枚举里面的每个数据值都可以叫元素,每个元素都有自己的编号,编号是从0开始的,依次的递增加1
enum Color {
  red,
  green,
  blue
}

const color: Color = Color.red;
console.log(color);
console.log(Color.red, Color.green, Color.blue);
console.log(Color[1]);
