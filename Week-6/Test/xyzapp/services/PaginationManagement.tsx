import { Product } from "@/datatypes/Product";
import { PageDetail } from "../datatypes/PageDetail";

type SingleRecord = {
  pageDetails: PageDetail;
  products: Product[];
};

class PaginationManagement {
  private alreadyVisitedPages: SingleRecord[] = [];

  public setAlreadyVisitedPages(
    pageDetails: PageDetail,
    allVisitedProducts: Product[]
  ) {
    this.alreadyVisitedPages.push({
      pageDetails: { page: pageDetails.page, limit: pageDetails.limit },
      products: allVisitedProducts,
    });
    console.log("Visit Set Successfully");
  }
  public getAlreadyVisitedPages() {
    return this.alreadyVisitedPages;
  }
  public findDataInRecords(pageNumber: number, limit: number) {
    for (const visit of this.alreadyVisitedPages) {
      if (
        +visit.pageDetails.page === +pageNumber &&
        +visit.pageDetails.limit === +limit
      ) {
        console.log("Data Found");
        return visit.products;
      }
    }
    return [] as Product[];
  }
}

export const paginationManagement = new PaginationManagement();
