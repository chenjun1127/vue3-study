// 类实现接口
(function () {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.run = function () {
            console.log('Dog is running');
        };
        return Dog;
    }());
    // 使用接口或基类类型
    var run1 = function (animal) {
        animal.run();
        return animal;
    };
    // 使用泛型约束
    var run2 = function (animal) {
        animal.run();
        return animal;
    };
    var dog1 = run1(new Dog());
    var dog2 = run2(new Dog());
})();
