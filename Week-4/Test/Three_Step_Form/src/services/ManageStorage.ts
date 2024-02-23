import { Family } from "../dataTypes/Family";
import { User } from "../dataTypes/User";

export class ManageStorage {

  private userData:User|null=null;
  private familyData:Family[]|null=null ;
  private familyImages:string[]|null=null;

  public setUserData(data:User){
    this.userData=data;
    console.log("User Data Changed")
  }
  public getUserData(){
    return this.userData;
  }
  public setFamilyData(data:Family[]){
    this.familyData=data;
    console.log("Data Set Successfully")
  }
  public getFamilyData(){
    return this.familyData?this.familyData:[{
      name:"",
      relation:"",
      number:"",
      address:""
    }];
  }
  public getFamilyImages(){
    return this?.familyImages?this.familyImages as string[]:[""];
  }
  public setFamilyImages(images:string[]){
    this.familyImages=images;
    console.log("Images saved Successfully")
    console.log(this.familyImages);
  }
    
  // setItem(key: string, value :any) {
  //     localStorage.setItem(key, JSON.stringify(value));
  //     console.log("Data Set Successfully");
  // }

  // getItem(key: string) {
  //   const oldStoredData: string | null = localStorage.getItem(key);
  //   if (oldStoredData != null) {
  //     const localData= JSON.parse(oldStoredData);
  //     return localData;
  //   }
  //   return null;
  // }

  // doesValueExits(key: string, value: number) {
  //   const oldStoredData = this.getItem(key);
  //   return oldStoredData?.includes(value);
  // }

  // removeValue(key: string, value: number) {
  //   let oldStoredData: number[] | null = this.getItem(key);
  //   if (this.doesValueExits(key, value)) {
  //     oldStoredData?.splice(oldStoredData.indexOf(value), 1);
  //     localStorage.setItem(key, JSON.stringify(oldStoredData));
  //   }
  //   return value;
  // }
}
export const manageStorage=new ManageStorage();
