// function download(url,downloaded) {
//     console.log(`Downloading file from ${ url } ...\n`);
//     setTimeout(() => {
//         imagename = url.split('/').pop();
        
//         downloaded(imagename);
//     }, 3000);
// }
// function compressfile(pth,compressed)
// {
//     let cpath = pth.split('.')[0] + '.zip';
//     console.log(`File  ${pth} compressing...\n`);
//     setTimeout(() => {
//         compressed(cpath);
//     }, 5000);
// }

// console.log(Date(0));
// function upload(cpath,uploaded) {
//     console.log(`${cpath} file Uploading...\n`);
//     setTimeout(() => {
//         uploaded(cpath);
//     }, 6000);
// }
// //uploaded part



// function downloaded(imagename) {
//     console.log(`file Downloaded sucessfully as ${imagename} \n`);
    
//     compressfile(imagename,function compressed(cpath) {
//         console.log(`${cpath} File Compressed Successfully\n`);
//         upload(cpath,function uploaded(cpath) {
//             let upfile = cpath.split(".")[0]+'jpg';
//             console.log(`${upfile} Uploaded Successfully.. \n`)
//         });
//     });
// }
// //this type of nested callback is not a good thing this call called Callback Hell;
// //to remove callback hall we use promises;
// download("https://facebook/profile.jpg" ,downloaded);

// const map=new Map();
// map.set("name","Ritesh");
// map.set("age","23");
// map.set("city","Mathura");
// map.entries();
// console.log(map.entries());


 
        


// let array = [1, undefined, 3, 4,0]; 
// let newArray = [...array.map((item)=> item==undefined?10000:item)]; //5,9]; [1,10000,3,4,0,5,9]
// console.log(newArray);

async function funcc(){


function add(x, y, z) { 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(x+y+z);
        },4000) 
        if(x==0 || y==0 || z==0)
        reject(-1);
    })
}

// here data will sttore the value return by the function 
add(1, 5, 25).then((data) => {
    console.log(data +" Inside resolve");
}).catch((err) => {
    console.log(err);
})
// const data=await add(1, 5, 25);
// console.log(data);
}
funcc();