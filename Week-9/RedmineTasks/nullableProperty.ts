type user ={
    firstName:string,
    lastName:string,
    age:number
}
type Client = {
    age: number;
    firstName: string;
    lastName: string;
  };
  

type NullableProperty<Type>={
[Key in keyof Type]:Type[Key]|null;
}
type NewType=NullableProperty<user>


/*
----------- nullableProperty -----------

- Here we are Creating an type which which accept an type which can be non-nullable and here we have
 to add the null property form that type and return the new one.
- Here we are taking two types Person a and Car which are non-nullable
- Then we are converting that non-nullable type to Nullable type
*/
