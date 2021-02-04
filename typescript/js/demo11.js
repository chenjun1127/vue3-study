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
// 抽象类:包含抽象方法(抽象方法一般没有任何的具体内容的实现),也可以包含实例方法,抽象类是不能被实例化,为了让子类进行实例化及实现内部的抽象方法
(function () {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.run = function () {
            console.log('都是跑');
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.eat = function () {
            console.log('dog在吃');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.eat();
    dog.run();
})();
