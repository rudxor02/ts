import "reflect-metadata";
import {
  EmptyClass,
  EmptyParam,
  INJECTABLE_WATERMARK,
  Injectable,
  InjectableTest,
  PARAMTYPES_METADATA,
  SCOPE_OPTIONS_METADATA,
  SELF_DECLARED_DEPS_METADATA,
} from "./nest";

class B {}

@EmptyClass()
class A {
  constructor(
    public readonly a: B,
    @EmptyParam()
    public readonly b = 3
  ) {}
}

// Reflect.defineMetadata(INJECTABLE_WATERMARK, true, A);
// console.log(Reflect.getMetadata(INJECTABLE_WATERMARK, A));
console.log(Reflect.getMetadataKeys(A));
console.log(Reflect.getMetadataKeys(B));
// console.log(Reflect.getMetadata("test", A));
