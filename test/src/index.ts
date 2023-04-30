const EmptyClass: ClassDecorator = <T extends { new (...args: any[]): {} }>(
  target: T,
) => {
  console.log(target.name);
  return class extends target {
    k = '';
  };
};

const EmptyParam: ParameterDecorator = <T extends Function>(
  target: T,
  key: string,
  idx: number,
) => {
  console.log(target.name);
  // console.log(key);
  console.log(idx);
};

@EmptyClass
class A {
  constructor(
    @EmptyParam
    public readonly a: number,
  ) {}
}

new A(3);
