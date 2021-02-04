// 目标对象
const user = {
  name: 'jack',
  age: 20,
  wife: {
    name: 'lucy',
    age: 19
  }
};
// 代理对象
const proxyUser = new Proxy(user, {
  // 获取目标对象的某个属性值
  get(target, prop) {
    console.log('get方法调用了');
    return Reflect.get(target, prop);
  },
  // 修改目标对象的属性值/为目标对象添加新的属性
  set(target, prop, value) {
    console.log('set方法调用了');
    return Reflect.set(target, prop, value);
  },
  // 删除目标对象上的某个属性
  deleteProperty(target, prop) {
    console.log('delete方法调用了');
    return Reflect.deleteProperty(target, prop);
  }
});
// 通过代理对象获取目标对象中的某个属性值
console.log(proxyUser.name);
// 通过代理对象更新目标对象上的某个属性值
proxyUser.name = 'tony';
console.log(user);
// 通过代理对象向目标对象中添加一个新的属性
proxyUser.gende = '男';
console.log(user);
delete proxyUser.name;
console.log(user);
proxyUser.wife.name = 'lily';
console.log(user);
