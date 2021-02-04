// 泛型函数
(function () {
    function getValueWithEs5(value) {
        return value;
    }
    var getValueWithEs6 = function (value) {
        return value;
    };
    console.log(getValueWithEs5(50));
    console.log(getValueWithEs6('50'));
})();
