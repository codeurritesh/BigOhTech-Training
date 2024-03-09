import { Quote } from "../dataTypes/Quote";


class LocalStorageManagement<T extends Quote> {
  setItem(key: string, value: T) {
    const oldStoredData = this.getItem(key);

    if (oldStoredData == null) {
      localStorage.setItem(key, JSON.stringify([value]));
      console.log("First Data set");
    }

    if (oldStoredData != null && !this.doesValueExist(key, value)) {
      localStorage.setItem(key, JSON.stringify([...oldStoredData, value]));
      console.log("Data Set Successfully");
    }
  }

  getItem(key: string): T[] | null {
    if (typeof window !== "undefined" && window.localStorage) {
      const oldStoredData: string | null = localStorage.getItem(key);

      if (oldStoredData != null) {
        const localData: T[] = JSON.parse(oldStoredData);
        return localData;
      }
    }

    return null;
  }

  doesValueExist(key: string, value: T): boolean {
    const oldStoredData = this.getItem(key);

    if (oldStoredData !== null) {
      return oldStoredData.some((item) => this.hasSameId(item, value));
    }

    return false;
  }

  private hasSameId(item: T, value: T): boolean {
    return "id" in item && "id" in value && item.id === value.id;
  }

  removeQuoteById(key: string, quoteId: string): Quote[] | null {
    let oldStoredData = this.getItem(key);
  
    if (oldStoredData !== null) {
      const indexToRemove = oldStoredData.findIndex((quote: Quote) => quote.id === quoteId);
  
      if (indexToRemove !== -1) {
        const removedQuote = oldStoredData.splice(indexToRemove, 1)[0];
        localStorage.setItem(key, JSON.stringify(oldStoredData));
        return oldStoredData; // Return the remaining data after deletion
      }
    }
  
    return null;
  }
  
  
}
export const localStorageManagement=new LocalStorageManagement();