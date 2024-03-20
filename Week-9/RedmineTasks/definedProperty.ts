type DefinedProperty<T> = {
  [K in keyof T]: Exclude<T[K], null>;
};

type Person = {
  age: number | null;
  firstName: string | null;
  lastName: string | null;
};

type Car = {
  model: number | null;
  name: string | null;
  color: string | null;
  type: string | null;
};

type NonNullableUser = DefinedProperty<Person>;
type NonNullableCar = DefinedProperty<Car>;

/*
----------- definedProperty-----------

- Here we are Creating an type which which accept an type which can be nullable and here we have
 to remove that null property form that type and return the new one.
- Here we are taking two types Person a and Car which are nullable
- Then we are converting that nullable type to nonNullable type
*/
