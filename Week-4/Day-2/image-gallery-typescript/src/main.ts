console.log("TSC file Running");
class ApiManagement{
  fetchApi(){

  }
}
class ChangeDom{
  changeImageContainer(){
    const imageContainer=document.querySelector('#image-container');
    console.log(imageContainer)
    console.log("Change Dom");
  }
}
const changedom=new ChangeDom();
changedom.changeImageContainer();
