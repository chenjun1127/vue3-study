// 类成员的修饰符，没写默认为public
// private修饰符，类中的成员如果使用private米修饰，那么外部是无法访问这个成员数据的，当然子类中也是无法访问的
(() => {
  class Animal {
    public name: string;
    id: number;
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
    eat() {
      console.log(this.name + '在吃。。。');
    }
  }

  class Person extends Animal {
    constructor(name: string, id: number) {
      super(name, id);
    }
    play() {
      console.log('id---->' + this.id + ', ' + this.name + '会玩');
    }
  }
  const dog = new Animal('大黄', 1);
  dog.eat();

  const judy = new Person('Judy', 2);
  judy.play();
})();
