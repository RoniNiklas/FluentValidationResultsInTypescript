// Key for validation error
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]:
  // Object arrays
  ObjectType[Key] extends Array<object> | undefined
  ? `${Key}` | `${Key}[${number}]` | `${Key}[${number}].${NestedKeyOf<NonNullable<ObjectType[Key]>[number]>}`
  // Primitive arrays
  : ObjectType[Key] extends Array<infer U> | undefined
  ? `${Key}` | `${Key}[${number}]`
  // Functions (hidden)
  : ObjectType[Key] extends (...args: any[]) => any | undefined
  ? never
  // Objects
  : ObjectType[Key] extends object | undefined
  ? `${Key}` | `${Key}.${NestedKeyOf<NonNullable<ObjectType[Key]>>}`
  // Primitives
  : `${Key}`;
}[keyof ObjectType & (string | number)];

// Type for the validation failures backend sends you in the Errors field
export type FluentValidationError<T extends object> = {
  [K in NestedKeyOf<T>]: string[]
}
