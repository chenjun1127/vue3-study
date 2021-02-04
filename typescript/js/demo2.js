// 接口
(function () {
    var jack = {
        id: 1,
        name: 'jack',
        age: 30,
        sex: 1
    };
    var User = /** @class */ (function () {
        function User(info) {
            this.info = info;
        }
        User.prototype.say = function () {
            console.log('Hello, my name is ' + this.info.name + ", I'm " + this.info.age + ' years old , My family name is ' + (this.info.sex === 0 ? 'female' : 'male'));
        };
        return User;
    }());
    var user = new User(jack);
    user.say();
})();
