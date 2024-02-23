import React, { useRef } from "react";
import "./addNewProduct.css";
const AddNewProduct = () => {
  const title = useRef<HTMLInputElement | null> (null);
  const brandName = useRef<HTMLInputElement | null> (null);
  const category = useRef<HTMLInputElement | null> (null);
  const description = useRef<HTMLInputElement | null> (null);
  const price = useRef<HTMLInputElement | null> (null);
  const thumbnailUrl = useRef<HTMLInputElement | null> (null);
  const imagesUrl = useRef<HTMLInputElement[] | null> (null);

  return (
    <form className="form-box">
      <div className="form-details">
        <h1>Add New Product</h1>
      </div>

      <div className="form-details">
        <input
          className="form-element"
          type="text"
          ref={title}
          placeholder="Title"
        />
        <input
          className="form-element"
          type="text"
          ref={brandName}
          placeholder="Brand"
        />
        <select className="form-element select" name="category" id="">
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>

      <div className="form-details">
        <input
          className="form-element textarea"
          name=""
          id=""
          ref={description}
          placeholder="Product Description"
        ></input>
      </div>

      <div className="form-details">
        <input
          className="form-element"
          type="number"
          placeholder="Price"
          ref={price}
        />
        <input
          className="form-element"
          type="text"
          placeholder="Thumbnail Image"
          ref={thumbnailUrl}
        />
      </div>

      <div className="form-details">
        <input className="form-element" type="text" placeholder="Image-1" />
        <input className="form-element" type="text" placeholder="Image-2" />
        <input className="form-element" type="text" placeholder="Image-3" />
        <input className="form-element" type="text" placeholder="Image-4" />
      </div>

      <div className="form-details">
        <button className="form-buttons submit" type="submit">
          Add
        </button>
        <button className="form-buttons reset" type="reset">
          Reset <i className="fa-solid fa-rotate-left"></i>
        </button>
      </div>

    </form>
  );
};

export default AddNewProduct;
