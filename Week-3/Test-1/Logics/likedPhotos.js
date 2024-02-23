// Function to manage UI data by updating the card container with new data
// Takes an array of data as input
function manageUiData(data){
    try{
    const cardContainer=document.querySelector("#image-container");
    cardContainer.innerHTML="";
    if(data.length==0){
        cardContainer.innerHTML="<h1 style='margin-auto;font-size:40px'>No Liked Images</h1>";
    }
    for(let item of data){
    const card=`<div class="card">
                <img src="${item.download_url}" class="card-image" alt="Image">
                <div class="card-content">
                    <div>
                        <p class="card-name">Name: ${item.name}</p>
                        <p class="card-name">Author: ${item.author}</p>
                    </div>
                        <button class="card-like" docId="${item.id}"><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>`
    cardContainer.innerHTML=cardContainer.innerHTML+card;
    }
    manageLikes(data);
    }catch(err){
        console.log("Something Went wrong");
    }
}
// Function to initialize the main page with liked images from local storage

function startMain(){
    try{
        console.log("Running Like Page")
        const likedImages=JSON.parse(localStorage.getItem("likedImages"));
        manageUiData(likedImages);
    }catch(err){
        console.log("Something Went wrong");
    }
}
// Function to manage like buttons and handle click events
function manageLikes(resultArray){
    try{
    console.log("Like Handler")
    const likeButtons=document.querySelectorAll(".card-like");
    
    for(let singlelikeButton of likeButtons){
    singlelikeButton.addEventListener("click",()=>{
        toggleLikeButton(singlelikeButton);
        console.log(`Cicked at ${singlelikeButton.getAttribute("docId")}`)
        deleteLikedFromLocals(resultArray,singlelikeButton.getAttribute("docId"));
    })
    }
    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to toggle the appearance of the like button
function toggleLikeButton(button){
    try{
    if(button.children[0].classList.contains("fa-solid"))
    {
    button.children[0].classList.remove("fa-solid")
    button.children[0].classList.add("fa-regular")
    }else{
        button.children[0].classList.remove("fa-regular")
        button.children[0].classList.add("fa-solid") 
    }
    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to delete a liked image from local storage and update the UI
function deleteLikedFromLocals(resultArray,clickedDocId)
{   
    try{
    const clickedDoc=findDocById(clickedDocId,resultArray);
    let oldLikedArray= JSON.parse(localStorage.getItem("likedImages"));
        oldLikedArray=deleteDoc(oldLikedArray,clickedDoc);
        localStorage.setItem("likedImages",JSON.stringify(oldLikedArray));
        manageUiData(oldLikedArray);
        console.log("Deleted")
    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to find a document in an array by its ID
function findDocById(id,dataArray)
{
    try{
    for(let item of dataArray)
    {
        if(item.id==id)
        return item;
    }
    return -1;
    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to delete a document from an array
function deleteDoc(dataArray,targetObject){
    try{
    for (const iterator of dataArray) {
        if(iterator.id==targetObject.id){
        let newarr=dataArray.filter((item)=>item!=iterator);
        return newarr;
    }
}
    }catch(err){
        console.log("Something Went wrong");
    }
}

startMain();
