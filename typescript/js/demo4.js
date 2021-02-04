// 泛型类
(function () {
    var Pair = /** @class */ (function () {
        function Pair(key, value) {
            this._key = key;
            this._value = value;
        }
        Object.defineProperty(Pair.prototype, "key", {
            get: function () {
                return this._key;
            },
            set: function (value) {
                this._key = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pair.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        return Pair;
    }());
    var p = new Pair(10, 'jack');
    console.log(p);
    p.key = 11;
    p.value = 'judy';
    console.log(p);
})();
