const oldFormat=[
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210"
    }
  ]
  console.log("\nOld Format:");
  console.log(oldFormat);
  console.log("\nAfter Formatting: ");
  console.log(JSON.stringify(changeFormat(oldFormat)));

  // MARK: Format Transformation

/**
 Transforms the format of an array of objects based on a unique 'batch_id'.

 - Parameter oldFormat: An array of objects with 'batch_id', 'name', and 'contact'.
 - Returns: An array of objects grouped by 'batch_id' with 'name' and 'contact'.
 */
  function changeFormat(oldFormat){
    let allBatchIds=[]
    let finalResult=[];
    oldFormat.map((item)=>{
        if(!allBatchIds.includes(item.batch_id))
        {
            allBatchIds.push(item.batch_id);
        }
    })

    allBatchIds.map((batch_id)=>{
  finalResult.push({batch_id:oldFormat.filter((item)=> {
    if(item.batch_id==batch_id){
        delete item.batch_id;
        return item;
    }
    })});
})
    return finalResult;
}
/**
 The code defines a 'changeFormat' function that transforms the format of an array of objects based on a unique 'batch_id'.
 The example usage demonstrates calling the 'changeFormat' function with an array of objects and logging the old and formatted formats to the console.
 */