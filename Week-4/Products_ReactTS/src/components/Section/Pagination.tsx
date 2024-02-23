import React, { useContext } from "react";
import "./Pagination.css";
import { paginationManagement } from "../../services/PaginationManagement";
import { apiManagement } from "../../services/ApiManagement";
import { AllProduct } from "../../datatypes/All-products";
import { MyContext } from "../../utils/MyContext";


const Pagination = () => {
const contextData = useContext(MyContext);

  const offsetHandler = async (event: any) => {
    const newOffset:number = event.target.value;
    paginationManagement.setBaseLimit(newOffset);

    const basePage:number=+paginationManagement.getBasePage();
    const limit:number=+paginationManagement.getBaseLimit();
    let limitedData:AllProduct=[];


    if(paginationManagement.findDataInRecords(basePage,limit).length>0){
      limitedData= paginationManagement.findDataInRecords(basePage,limit);
      contextData?.setAllProducts(limitedData);
      console.log("Set found Data")
      return;
    }

    console.log(typeof(basePage));
    limitedData = await apiManagement.getAllLimitedProducts(basePage,limit);  
    paginationManagement.setAlreadyVisitedPages({page:basePage,limit:limit},limitedData);
    contextData?.setAllProducts(limitedData);
    console.log(paginationManagement.getAlreadyVisitedPages())
    console.log("Data saved In Locals")

  }

  const decreasePage = async (event: any) => {
    const currentPage = paginationManagement.getBasePage();
    if (currentPage > 1) {
      paginationManagement.setBasePage(currentPage - 1);
      const limitedData:AllProduct = await apiManagement.getAllLimitedProducts(
        paginationManagement.getBasePage(),
        paginationManagement.getBaseLimit()
      );
      console.log(limitedData);
      contextData?.setAllProducts(limitedData);
    }
  };
  const increasePage = async (event: any) => {
    paginationManagement.setBasePage(paginationManagement.getBasePage() + 1);
    const limitedData: AllProduct = await apiManagement.getAllLimitedProducts(
      paginationManagement.getBasePage(),
      paginationManagement.getBaseLimit()
    );
    contextData?.setAllProducts(limitedData);
  };

  return (
    <section className="paging-section">
      <div className="pagination">
        <label htmlFor="offset"> Offset</label>
        <input
          type="number"
          id="offset"
          defaultValue={20}
          onChange={offsetHandler}
          placeholder="OffSet"
        />
      </div>

      <div className="pagination">
        <button id="paginate-back" className="shift-buttons">
          <i className="fa-solid fa-arrow-left" onClick={decreasePage}></i>
        </button>
        <div className="paginate-buttons">
          
          <button className={paginationManagement.getBasePage()!==1?"page-number":"page-number active-page"} value={1}>
            1
          </button>
          <button className={paginationManagement.getBasePage()!==2?"page-number":"page-number active-page"} value={2}>
            2
          </button>
          <button className={paginationManagement.getBasePage()!==3?"page-number":"page-number active-page"} value={3}>
            3
          </button>
          <button className={paginationManagement.getBasePage()!==4?"page-number":"page-number active-page"} value={4}>
            4
          </button>
          <button className={paginationManagement.getBasePage()!==5?"page-number":"page-number active-page"} value={5}>
            5
          </button>
        </div>
        <button id="paginate-next" className="shift-buttons">
          <i className="fa-solid fa-arrow-right" onClick={increasePage}></i>
        </button>
      </div>
    </section>
  );
};

export default Pagination;
