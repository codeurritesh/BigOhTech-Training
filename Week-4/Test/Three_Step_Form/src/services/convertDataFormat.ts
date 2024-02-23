export const convertDataFormat=(data:any)=>{
    let result=[];
    for(let i=0;i<data.name.length;i++){
        const newObj={
            name:data.name[i],
            number:data.number[i],
            relation:data.relation[i],
            address:data.address[i]
        }
        result.push(newObj);
    }
    return result;
}