const oldData={
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
      "keyA": true,
      "keyB": false,
      "keyC": {
        "keyCOne": "key C one value",
        "keyCTwo": "key C two value",
        "keyCThree": 1234
      }
    }
  }
  let result= changeObject(oldData);
  console.log(result);

  // MARK: Object Transformation

/**
 Transforms a nested object into a flat object with dot-separated keys.

 - Parameter obj: The nested object to be transformed.
 - Returns: A flat object with dot-separated keys.
 */
  function changeObject(obj) {
    let stack = [{ obj, prefix: "" }];
    let result = {};

    while (stack.length > 0) {
        let { obj, prefix } = stack.pop();

        for (let key in obj) {
            let newKey = prefix ? `${prefix}.${key}` : key;

            if (typeof obj[key] === "object" && obj[key] !== null) {
                stack.push({ obj: obj[key], prefix: newKey });
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}
/**
 The code defines a 'changeObject' function that transforms a nested object into a flat object with dot-separated keys.
 The example usage demonstrates calling the 'changeObject' function with a nested object and logs the resulting flat object to the console.
 */


  