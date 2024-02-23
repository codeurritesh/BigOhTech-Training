import { AllProduct } from "../datatypes/All-products";
import { PageDetail } from "../datatypes/PageDetail";

type SingleRecord={
    pageDetails:PageDetail,
    products:AllProduct
  }

class PaginationManagement {
  private baseLimit:number = 20;
  private basePage:number = 1;

  private alreadyVisitedPages:SingleRecord[]=[];

  public getBaseLimit() {
    return this.baseLimit as number;
  }
  public getBasePage() {
    return this.basePage as number;
  }
  public setBasePage(pageNumber: number) {
    this.basePage = pageNumber as number;
  }
  public setBaseLimit(limit: number) {
    this.baseLimit = limit as number;
  }
  public setAlreadyVisitedPages(pageDetails:PageDetail,allVisitedProducts:AllProduct){

    this.alreadyVisitedPages.push({pageDetails:{page:this.basePage,limit:this.baseLimit},products:allVisitedProducts});
  }
  public getAlreadyVisitedPages(){
    return this.alreadyVisitedPages;
  }
  public findDataInRecords(pageNumber:number,limit:number){
    console.log(typeof(limit));
        for (const visit of this.alreadyVisitedPages) {
            console.log(visit.pageDetails.page+" "+pageNumber)
            console.log(visit.pageDetails.limit+ " "+ (limit))
            if(+visit.pageDetails.page===+pageNumber && +visit.pageDetails.limit===+limit){
                return visit.products;
            }
        }
        return [] as AllProduct;
  }
  public allDataLength(){

  }
}

export const paginationManagement = new PaginationManagement();

