import React, { useContext, useEffect, useState } from "react";
import Input from "../comman/Button";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import "./familySection.css";
import { convertDataFormat } from "../../services/convertDataFormat";
import { manageStorage } from "../../services/ManageStorage";
import { FormContext } from "../../context/FormContext";
import { Family } from "../../dataTypes/Family";
import { User } from "../../dataTypes/User";

const FamilySection = () => {
  const [alreadyStoredData, setAlreadyStoredData] = useState<Family[]>(
    manageStorage.getFamilyData()
  );
  const formContext = useContext(FormContext);

  useEffect(() => {
    const storedData = manageStorage.getFamilyData();
    console.log(storedData);
    setAlreadyStoredData(storedData);
    console.log(alreadyStoredData);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const {
    fields,
    append: perArrayAppend,
    remove,
  } = useFieldArray({
    control,
    name: "person",
  });

  useEffect(() => {
    perArrayAppend(alreadyStoredData);
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
    manageStorage.setFamilyData(data.person);
    formContext?.setFormType("creativeForm");
  };

  function backPageHandler() {
    formContext?.setFormType("userForm");
  }
  function deleteHandler(index: number) {
    remove(index);
  }
  function addPersonHandler() {
    perArrayAppend({
      name: "",
      relation: "",
      number: "",
      address: "",
    });
  }

  return (
    <>
      <div>
        <h1>Family Information</h1>
      </div>
      <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((_, index) => (
          <>
            <h4>
              Person-{index + 1}{" "}
              {fields.length > 1 ? (
                <i
                  className="fa-solid fa-trash"
                  onClick={() => deleteHandler(index)}
                ></i>
              ) : (
                ""
              )}
            </h4>
            <div className="form-border">
              <div className="form-control">
                <input
                  className="form-input"
                  placeholder="Full Name"
                  {...register(`person.${index}.name`, { required:{ value:true,message:"Name Required",}, })}
                />
                <small className="form-error">
                  {errors && (errors.person as any)?.[index]?.name?.message}
                </small>
              </div>

              <div className="form-control">
                <input
                  placeholder="Phone Number"
                  className="form-input"
                  type="number"
                  {...register(`person.${index}.number`, {
                    required: {value:true,message:"Phone Number Requried"},
                    minLength:{value:6,message:"At least 6 digit Required"},
                    maxLength: {value:12,message:"At max 12 digit Required"},
                  })}
                />
                <small className="form-error">
                  {errors && (errors.person as any)?.[index]?.number?.message}
                </small>

              </div>


              <div className="form-control">
                <input
                  className="form-input"
                  placeholder="Relation"
                  {...register(`person.${index}.relation`,  { required:{ value:true,message:"Relation Required",}, })}
                />
                <small className="form-error">
                  {errors && (errors.person as any)?.[index]?.relation?.message}
                </small>
              </div>


              <div className="form-control">
                <input
                  className="form-input"
                  placeholder="Current Address"
                  {...register(`person.${index}.address`, { required:{ value:true,message:"Address Required",}, })}
                />
                <small className="form-error">
                  {errors && (errors.person as any)?.[index]?.address?.message}
                </small>
              </div>
            </div>
          </>
        ))}
        <div className="add-button">
          <i className="fa-solid fa-plus" onClick={addPersonHandler}></i>
        </div>
        <div className="form-buttons">
          <button className="button" onClick={backPageHandler}>
            BACK
          </button>
          <button className="button" type="submit">
            NEXT
          </button>
        </div>
      </form>
    </>
  );
};

export default FamilySection;
