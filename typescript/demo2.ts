// 接口
(() => {
  interface IPerson {
    readonly id: number;
    name: string;
    age: number;
    sex: number;
    address?: any;
  }

  const jack: IPerson = {
    id: 1,
    name: 'jack',
    age: 30,
    sex: 1
  };

  class User {
    info: IPerson;
    constructor(info: IPerson) {
      this.info = info;
    }
    say(): void {
      console.log('Hello, my name is ' + this.info.name + ", I'm " + this.info.age + ' years old , My family name is ' + (this.info.sex === 0 ? 'female' : 'male'));
    }
  }
  const user = new User(jack);
  user.say();
})();
