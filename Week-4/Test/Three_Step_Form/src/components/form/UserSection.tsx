import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./userSection.css";
import { manageStorage } from "../../services/ManageStorage";
import { FormContext } from "../../context/FormContext";
import { User } from "../../dataTypes/User";

const UserSection = () => {
  const [alreadyStoredData, setAlreadyStoredData] = useState<User | null>(manageStorage.getUserData());
  const formContext = useContext(FormContext);

  useEffect(() => {
    const alreadyStoredData = manageStorage.getUserData();
    setAlreadyStoredData(alreadyStoredData);
    // console.log(alreadyStoredData)
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues:alreadyStoredData as User
  });
 

  const onSubmit = (data: any) => {
    console.log(data);
    manageStorage.setUserData(data);
    formContext?.setFormType("familyForm");
  };

  return (
    <>
      <div>
        <h1>User Information</h1>
      </div>
      <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <div className="form-control">
            <input
              className="form-input"
              placeholder="Full Name"
              {...register("name", { required: true })}
            />
            <small className="form-error">
              {errors.name?.type === "required" && "Name is required"}
            </small>
          </div>

          <div className="form-control">
            <input
              className="form-input"
              placeholder="Email Address"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
            <small className="form-error">
              {errors.email?.type === "required" && "Email is required"}
              {errors.email?.type === "pattern" &&
                "Entered email is in wrong format"}
            </small>
          </div>
        </div>
        <div className="form-section">
          <div className="form-control">
            <input
              placeholder="Phone Number"
              className="form-input"
              type="number"
              {...register("number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            <small className="form-error">
              {errors.number?.type === "minLength" &&
                "Entered number is less than 6 digits"}
              {errors.number?.type === "maxLength" &&
                "Entered number is more than 12 digits"}
              {errors.number?.type === "required" && "Phone Number is Required"}
            </small>
          </div>

          <div className="form-control">
            <input
              className="form-input"
              placeholder="Current Address"
              {...register("address", { required: true })}
            />
            <small className="form-error">
              {errors.address?.type === "required" && "Address is required"}
            </small>
          </div>
        </div>

        <div className="form-section">
          <div className="form-control">
            <input
              className="form-input"
              placeholder="Age"
              type="number"
              {...register("age", { required: true })}
            />
            <small className="form-error">
              {errors.age?.type === "required" && "age is required"}
            </small>
          </div>

          <div className="form-control">
            <select
              id=""
              {...register("gender", { required: true })}
              className="form-input"
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <small className="form-error">
              {errors.gender?.type === "required" && "Gender is required"}
            </small>
          </div>
        </div>

        <div className="form-section">
          <button className="button" type="submit">
            NEXT
          </button>
        </div>
      </form>
    </>
  );
};

export default UserSection;
