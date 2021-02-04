var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类成员的修饰符，没写默认为public
// private修饰符，类中的成员如果使用private米修饰，那么外部是无法访问这个成员数据的，当然子类中也是无法访问的
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name, id) {
            this.name = name;
            this.id = id;
        }
        Animal.prototype.eat = function () {
            console.log(this.name + '在吃。。。');
        };
        return Animal;
    }());
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person(name, id) {
            return _super.call(this, name, id) || this;
        }
        Person.prototype.play = function () {
            console.log('id---->' + this.id + ', ' + this.name + '会玩');
        };
        return Person;
    }(Animal));
    var dog = new Animal('大黄', 1);
    dog.eat();
    var judy = new Person('Judy', 2);
    judy.play();
})();
