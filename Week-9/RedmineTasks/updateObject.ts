function updateObject<Type, Key extends keyof Type>(
    obj: Type,
    key:    Key,
    value: Type[Key]
) {

}

const obj = { a: 1, b: 'hello',   c: true };

const updated = updateObject(obj, 'c',false);

/* 
- Here we are having one object { a: 1, b: 'hello',   c: true }
- Here we are creating an function name updateObject which is taking an 3 arguments 
  where first argument is the object and second argument is the key that has to update
- third arguments should be the that updated value.
- Here we are taking third argument with respect to that second argument
*/



