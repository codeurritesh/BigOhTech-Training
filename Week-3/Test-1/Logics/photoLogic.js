console.log("Running")
 storeLoadedData={};
// Function to fetch data from the Picsum API based on page and limit
async function fetchApiData(page,limit){
    try{
    const apiData=await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    const resultArray=await apiData.json();
    return addNameInsideDocument(resultArray);

    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to get a random index within a given limit
function getRandomIndexes(limit){
    return Math.floor(Math.random()*limit);
}

// Function to add a random name to each item in the data array
function addNameInsideDocument(data){
    try{
    const nameArray=["Enviroment","Study","Human","Man Made","Universe","Harmful"];
    for(let item of data){
        item.name=nameArray[getRandomIndexes(nameArray.length)];
    }
    return data;
    }catch(err){
        console.log("Something Went wrong");
    }
}

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

// Function to check if a document with a specific ID exists in an array
function doesDocExits(dataArray,targetObject){
    try{
    for (const iterator of dataArray) {
        if(iterator.id==targetObject.id)
        return true;
    }
    return false;
    }catch(err){
        console.log("Something Went wrong");
    }
}

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

function checkLikeStorage(doc){
    try{
    const storageLikes=JSON.parse(localStorage.getItem("likedImages"));
    if(storageLikes==null){
        return false;
    }
    for (const iterator of storageLikes) {
        if(iterator.id==doc.id)
       return true;
    }
    return false;

    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to manage liked images in local storage
function manageLikedLocalStroage(resultArray,clickedDocId)
{   
    try{

    const clickedDoc=findDocById(clickedDocId,resultArray);
    let oldLikedArray= JSON.parse(localStorage.getItem("likedImages"));
    if(oldLikedArray==null)
    {
        localStorage.setItem("likedImages",JSON.stringify([clickedDoc]));
        console.log("first added")
    }
    else if(doesDocExits(oldLikedArray,clickedDoc)){
        oldLikedArray=deleteDoc(oldLikedArray,clickedDoc);
        localStorage.setItem("likedImages",JSON.stringify(oldLikedArray));
        console.log("Deleted")
    }else{
        localStorage.setItem("likedImages",JSON.stringify([...oldLikedArray,clickedDoc]));
        console.log("added");
    }

    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to update the like count in the UI
function manageLikeCount(){
    try{
    const count=document.querySelector("#countLikes");
    count.innerHTML=`${JSON.parse(localStorage.getItem('likedImages'))?.length}`
    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to manage likes on the UI
function manageLikes(resultArray){
    try{
    const likeButtons=document.querySelectorAll(".card-like");
    
    for(let singlelikeButton of likeButtons){
    singlelikeButton.addEventListener("click",()=>{
        toggleLikeButton(singlelikeButton);
        console.log(`Cicked at ${singlelikeButton.getAttribute("docId")}`)
        manageLikedLocalStroage(resultArray,singlelikeButton.getAttribute("docId"));
        manageLikeCount();
    })
    }

    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to manage UI data including liked status and filters
function manageUiData(data){
    try{
    const cardContainer=document.querySelector("#image-container");
    cardContainer.innerHTML="";
    if(data.length==0){
        cardContainer.innerHTML="<img style='width:500px' src='../Images/noresult.png'</img>";
        cardContainer.style.overflow="hidden";
    }
    for(let item of data){
    const card=`<div class="card">
                <img src="${item.download_url}" class="card-image" alt="Image">
                <div class="card-content">
                    <div>
                        <p class="card-name">Name: ${item.name}</p>
                        <p class="card-name">Author: ${item.author}</p>
                    </div>
                        <button class="card-like" docId="${item.id}">${checkLikeStorage(item)?`<i class="fa-solid fa-heart"></i>`:`<i class="fa-regular fa-heart"></i>`}</button>
                </div>
            </div>`
    cardContainer.innerHTML=cardContainer.innerHTML+card;
    cardContainer.style.overflow="scroll";
    }
    manageLikes(data);
    manageFilters(data);

    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to handle searches based on user input
function manageSearches(apiData){
    try{
    const searchButton=document.querySelector("#search-button");
    searchButton.addEventListener('click',()=>{
        const searchbar=document.querySelector("#searchbar");
        const searchData=searchbar.value.trim();
        localStorage.setItem("search",searchData);
        searchbar.value="";
        if(searchData!=""){
             let searchResults=apiData.filter((item)=>(item.author.toLowerCase().includes(searchData))||(item.name.toLowerCase().includes(searchData)))
             manageUiData(searchResults);
        }else{
            manageUiData(apiData);
        }
    })
    }catch(err){
        console.log("Something Went wrong");
    }
}
// Function to manage sorting based on filter selection
function manageFilters(apiData){
    try{
    const filterSwitch=document.querySelector('#filter-switch');
    filterSwitch.addEventListener('change',()=>{
        localStorage.setItem("filter",filterSwitch.value);
        if(filterSwitch.value=='ascending'){
            manageUiData(sortArray(filterSwitch.value,apiData));
        }else if(filterSwitch.value=='descending'){
            manageUiData(sortArray(filterSwitch.value,apiData));
        }
    })
    }catch(err){
        console.log("Something Went wrong");
    }
}
// Function to sort an array based on type (ascending or descending)
function sortArray(type,array){
    try{
    if(type=="ascending"){
        array=array.sort((x,y)=>{
            if(x.name>y.name){return 1;}
            if(x.name<y.name){return -1;}
            return 0;
        }); 
        return array;
    }
    if(type=="descending"){
        array=array.sort((y,x)=>{
            if(x.name>y.name){return 1;}
            if(x.name<y.name){return -1;}
            return 0;
        }); 
        return array;
    }
    }catch(err){
        console.log("Something Went wrong");
    }
}
// Function to handle pagination
async function pagination(){
    try{
    const prevButton = document.getElementById("paginate-back");
    const nextButton = document.getElementById("paginate-next");
    const cardContainer=document.querySelector("#image-container");
    const offSet=document.querySelector('#offset');
    const pagenumber=document.querySelectorAll('.page-number');
    let currentPage = 1;
    let limit = 20;
    offSet.addEventListener('change',()=>{
        limit=offSet.value;
        console.log(limit)
        updatePage(currentPage,limit);
    })
    cardContainer.addEventListener("scroll",(e)=>{
        if (Math.ceil(cardContainer.scrollTop + cardContainer.clientHeight) === cardContainer.scrollHeight) {
            // Perform actions when scrolled to the bottom
            console.log('Scrolled to the bottom!');
            currentPage++;
            updatePage(currentPage,limit);
            cardContainer.scrollTop=cardContainer.scrollHeight/2;

            // cardContainer.scrollTop=0;
        }else 
        if(cardContainer.scrollTop==0){
                console.log("Scrolled At top")
                if(currentPage>1){
                currentPage--;
                updatePage(currentPage,limit)
                cardContainer.scrollTop=cardContainer.scrollHeight/2;
                }
        }
    })

        for (let i=0;i<pagenumber.length;i++) {
            pagenumber[i].addEventListener('click',()=>{
                currentPage=i+1;
                updatePage(currentPage,limit)
            })
        }
    
        updatePage(currentPage,limit);

        prevButton.addEventListener("click", async() => {
            if (currentPage > 1) {
                currentPage--;
                updatePage(currentPage,limit);
            }
        });

        nextButton.addEventListener("click", async() => {
            currentPage++;
            updatePage(currentPage,limit);
        });
    }catch(err){
        console.log("Something Went wrong");
    }
}

// Function to update the page based on pagination and filters
async function updatePage(page,limit){
    try{
    changePageNumber(page);
    const pagenumber=document.querySelectorAll('.page-number');
    for (let i=0;i<pagenumber.length;i++) {
        pagenumber[i].addEventListener('click',()=>{
            currentPage=i+1;
            updatePage(currentPage,limit)
        })
    }
    const filter=localStorage.getItem('filter');
    let resultData;
    if(storeLoadedData.hasOwnProperty(JSON.stringify({page:page,limit:limit}))){
        resultData=storeLoadedData[JSON.stringify({page:page,limit:limit})];
        console.log(JSON.stringify(resultData));
    }else{
    resultData=await fetchApiData(page,limit);
    storeLoadedData[JSON.stringify({page:page,limit:limit})]=resultData;
    console.log(JSON.stringify(storeLoadedData));
    }
    if(filter!=null && filter=='ascending'){
        resultData=sortArray("ascending",resultData);
    }
    if(filter!=null && filter=='descending'){
        resultData=sortArray("descending",resultData);
    }
    manageUiData(resultData); 
    }catch(err){
        console.log("Something Went wrong");
    }
}
// Function to change the styling of page numbers based on current page
function changePageNumber(page){
    try{
    const pagenumber=document.querySelectorAll('.page-number');
    for (const iterator of pagenumber) {
        iterator.style.backgroundColor="#eee";
        iterator.style.color="black";
        iterator.border="0px";
    }
    if(page<=pagenumber.length){
    pagenumber[page-1].style.backgroundColor="grey";
    pagenumber[page-1].style.color="white";
    }else{
        const pageButtonCont=document.querySelector(".paginate-buttons")
        pageButtonCont.innerHTML=pageButtonCont.innerHTML+`<button style="background-color:grey;color:white" class="page-number">${page}</button>`
        pageButtonCont.scrollTop = pageButtonCont.scrollHeight;
        pageButtonCont.scrollLeft = pageButtonCont.scrollWidth;
    }
    }catch(err){
        console.log("Something Went wrong");
    }
}
// Main function to initialize the application
async function startMain(){
    try{
    manageLikeCount();
    pagination();

    }catch(err){
        console.log("Something Went wrong");
    }
}

startMain();

