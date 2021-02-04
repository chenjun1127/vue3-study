// 类实现接口
(() => {
  interface IAnimal {
    run(): void;
  }

  class Dog implements IAnimal {
    run(): void {
      console.log('Dog is running');
    }
  }
  // 使用接口或基类类型
  const run1 = (animal: IAnimal): IAnimal => {
    animal.run();
    return animal;
  };
  // 使用泛型约束
  const run2 = <T extends IAnimal>(animal: T): T => {
    animal.run();
    return animal;
  };
  const dog1 = run1(new Dog());
  const dog2 = run2(new Dog());
})();
