const queries={
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
}
const baseurl="https://localhost:400";

// MARK: Query URL Construction

/**
 Constructs a URL by appending query parameters to the base URL.

 - Parameters:
   - queries: An object representing key-value pairs of query parameters.
   - baseurl: The base URL to which queries are appended.
 - Returns: The constructed URL with appended queries.
 */

const resultUrl=findQueryUrl(queries,baseurl);
console.log("\n URL After Applying Queries: "+resultUrl);
findQueryUrl(queries,baseurl);
function findQueryUrl(queries,baseurl){
  baseurl=baseurl.concat("?");
  for(let query in queries){
    baseurl=baseurl.concat(query+"="+queries[query]+"&");
  }
  return baseurl.substring(0,baseurl.length-1);
}

/**
 The code defines a 'findQueryUrl' function that takes an object of queries and a base URL, and constructs a URL by appending query parameters to the base URL.
 The example usage demonstrates calling the 'findQueryUrl' function with a set of queries and a base URL, and logging the resulting URL to the console.
 */