// 存取器：让我们可以有效的控制对对象中的成员的访问，通过getters和setters来进行操作
(() => {
  class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }
    set fullName(value) {
      this.firstName = value.split(' ')[0];
      this.lastName = value.split(' ')[1];
    }
  }
  const person: Person = new Person('LeBron', 'James');
  console.log(person.fullName);
  person.fullName = 'Kevin Durant';
  console.log(person.fullName);
})();
