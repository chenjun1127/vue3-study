// 抽象类:包含抽象方法(抽象方法一般没有任何的具体内容的实现),也可以包含实例方法,抽象类是不能被实例化,为了让子类进行实例化及实现内部的抽象方法
(() => {
  abstract class Animal {
    abstract eat(): void;
    run() {
      console.log('都是跑');
    }
  }
  class Dog extends Animal {
    eat(): void {
      console.log('dog在吃');
    }
  }
  const dog = new Dog();
  dog.eat();
  dog.run();
})();
