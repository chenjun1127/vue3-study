// 存取器：让我们可以有效的控制对对象中的成员的访问，通过getters和setters来进行操作
(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Object.defineProperty(Person.prototype, "fullName", {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (value) {
                this.firstName = value.split(' ')[0];
                this.lastName = value.split(' ')[1];
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var person = new Person('LeBron', 'James');
    console.log(person.fullName);
    person.fullName = 'Kevin Durant';
    console.log(person.fullName);
})();
