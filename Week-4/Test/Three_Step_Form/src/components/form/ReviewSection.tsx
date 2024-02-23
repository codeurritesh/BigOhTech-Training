import React, { Fragment, useContext, useEffect, useState } from "react";
import { manageStorage } from "../../services/ManageStorage";
import { User } from "../../dataTypes/User";
import "./reviewSection.css";
import { Family } from "../../dataTypes/Family";
import { FormContext } from "../../context/FormContext";
const ReviewSection = () => {
  const [userData, setUserData] = useState<User | null>(manageStorage.getUserData());
  const [familyData, setFamilyData] = useState<Family[] | null>(manageStorage.getFamilyData());
  const [familyImages,setFamilyImages]=useState<string[]>(manageStorage.getFamilyImages);
  const formContext = useContext(FormContext);

  useEffect(() => {
    let userPageData = manageStorage.getUserData();
    let familyPageData=manageStorage.getFamilyData();
    let familyImageData=manageStorage.getFamilyImages();
    setFamilyImages(familyImageData);
    setUserData(userPageData);
    setFamilyData(familyPageData);
  }, []);

  function backPageHandler() {
    formContext?.setFormType("creativeForm");
  }
  function formSubmitHandler(){
    console.log("submittedddd successfully")
    formContext?.setIsSubmitted(true)
  }
  return (
    <>
      <div>
        <h1>Review Application</h1>
        <h3 style={{ textAlign: "center" }} className="sub-heading">
          User Information
        </h3>
        <p>
          <b>Name: </b>
          {userData?.name}
        </p>
        <p>
          <b>Email: </b>
          {userData?.email}
        </p>
        <p>
          <b>Phone Number: </b>
          {userData?.number}
        </p>
        <p>
          <b>Your Age: </b>
          {userData?.age}
        </p>
        <p>
          <b>Current Address: </b>
          {userData?.address}
        </p>
      </div>

      <div className="family-arr">
      <h3
        style={{ textAlign: "center", marginTop: "50px" }}
        className="sub-heading"
      >
        Family Information
      </h3>
      {familyData?.map((data, index) => {
        return (
          <div className="single-form-details">
            <div className="person-detail">
              <h2>Person-{index + 1}</h2>
              <p>
                <b>Name: </b>
                {data?.name}
              </p>
              <p>
                <b>Phone Number: </b>
                {data?.number}
              </p>
              <p>
                <b>Your Age: </b>
                {data?.address}
              </p>
              <p>
                <b>Relation: </b>
                {data.relation}
              </p>
            </div>
            <img
              src={ familyImages[index]|| "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}
              className="person-image"
              alt=""
            />
          </div>
        );
      })}
      <div className="form-buttons mt">
        <button className="button" onClick={backPageHandler}>
          BACK
        </button>
        <button className="button" type="submit" onClick={formSubmitHandler}>
          FINISH
        </button>
      </div>
      </div>
    </>
  
    );
    
};

export default ReviewSection;
