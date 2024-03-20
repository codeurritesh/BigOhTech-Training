const user = {
  firstName: "Tony",
  lastName: "Stark",
  age: 54,
};

type User = {
  firstName: string;
  lastName: string;
  age: number;
};
const transformKeys = (object: User, updateObject: Partial<User>) => {};
const transformUser = transformKeys(user, { age: 9, firstName: "rites" });

/* 
- Here we are having one object type called User
- Here we are creating an function name transformUser which is taking an 2 arguments 
  where first argument is the object and second argument is the things that has to update
- second arguments should be the optional types of User type because it is noe confimed that what to update.
- Here we are using partial User which provides that optional properties of the User
*/
