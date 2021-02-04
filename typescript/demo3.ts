// 泛型函数
(() => {
  function getValueWithEs5<T>(value: T): T {
    return value;
  }

  const getValueWithEs6 = <T>(value: T): T => {
    return value;
  };
  console.log(getValueWithEs5(50));
  console.log(getValueWithEs6('50'));  
})();
