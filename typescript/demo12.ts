(() => {
  const info = (a: string, ...args: string[]): void => {
    console.log(a, ...args);
  };
  info('a', 'b', 'c');
})();
