// 泛型类
(() => {
  class Pair<K, V> {
    private _key: K;
    private _value: V;
    constructor(key: K, value: V) {
      this._key = key;
      this._value = value;
    }

    get key() {
      return this._key;
    }
    get value() {
      return this._value;
    }
    set key(value) {
      this._key = value;
    }
    set value(value) {
      this._value = value;
    }
  }
  const p = new Pair<number, string>(10, 'jack');
  console.log(p);
  p.key = 11;
  p.value = 'judy';
  console.log(p);
})();
