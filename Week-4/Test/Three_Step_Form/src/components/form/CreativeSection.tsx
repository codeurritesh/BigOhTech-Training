import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./creativeSection.css";
import { manageStorage } from "../../services/ManageStorage";
import { FormContext } from "../../context/FormContext";
import { Family } from "../../dataTypes/Family";

const CreativeSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const [imageSrc, setImageSrc] = useState<(string | ArrayBuffer | null)[]>(manageStorage.getFamilyImages());
  const [memberCount, setMemberCount] = useState<number>(1);
  const [alreadyStoredData, setAlreadyStoredData] = useState<Family[]>();
  const formContext = useContext(FormContext);

  useEffect(() => {
    const storedData = manageStorage.getFamilyData();
    setMemberCount(storedData.length);
    setAlreadyStoredData(storedData || []);
  }, []);

  function backPageHandler() {
    formContext?.setFormType("familyForm");
  }
  function SubmitPageHandler() {
    formContext?.setFormType("reviewForm");
  }
  function imageHandler(event: any, index: number) {
    console.log(index);
    console.log("change");
    const files = event.target.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        const updatedImageSrcs = [...imageSrc];
        updatedImageSrcs[index] = this.result;
        setImageSrc(updatedImageSrcs);
        manageStorage.setFamilyImages(updatedImageSrcs as string[]);
      });
    }
  }
  return (
    <>
      <div>
        <h1>Creative Details</h1>
        <p>Upload Images: </p>
      </div>
      <form className="form-content" onSubmit={SubmitPageHandler}>
        <div className="form-image-handler">
          {[...Array(memberCount)].map((_, index) => (
            <div className="fig-holder">
              <label htmlFor={`img-${index}`}>
                <img
                  className="img-holder"
                  src={
                    imageSrc[index]
                      ? (imageSrc[index] as string)
                      : "https://static.vecteezy.com/system/resources/thumbnails/021/548/095/small/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                  }
                  alt=""
                />
              </label>
              <input
                type="file"
                onChange={(e) => imageHandler(e, index)}
                id={`img-${index}`}
                style={{ display: "none" }}
                // {...register("image", { required: true })}
                accept="image/*"
                required
              />
              <figcaption className="file-caption">
                {alreadyStoredData
                  ? alreadyStoredData[index].name
                  : "Upload Image"}
              </figcaption>
              <small className="form-error">
                {errors.image?.type === "required" && "Image is required"}
              </small>
            </div>
          ))}
        </div>

        <div className="form-buttons">
          <button className="button" onClick={backPageHandler}>
            BACK
          </button>
          <button className="button" type="submit">
            FINISH
          </button>
        </div>
      </form>
    </>
  );
};

export default CreativeSection;

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// function ImageUpload() {
//     const { register, handleSubmit } = useForm();
//     const [imageSrc, setImageSrc] = useState(null);

//     const handleFileUpload = (data) => {
//         const reader = new FileReader();
//         reader.onload = () => {
//             setImageSrc(reader.result);
//         };
//         reader.readAsDataURL(data.image[0]);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit(handleFileUpload)}>
//                 <input type="file" {...register('image')} accept="image/*" />
//                 <button type="submit">Upload Image</button>
//             </form>
//             {imageSrc && (
//                 <div>
//                     <h2>Uploaded Image:</h2>
//                     <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100%' }} />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ImageUpload;
