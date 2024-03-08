import { Product } from "../datatypes/Product";
import { SignUp } from "../datatypes/SignUp";

export class LocalStorageManagement<T extends Product | SignUp> {
  //same....
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

  //same
  getItem(key: string): T[] | null {
    const oldStoredData: string | null = localStorage.getItem(key);

    if (oldStoredData != null) {
      const localData: T[] = JSON.parse(oldStoredData);
      return localData;
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

  // key, should be belong to our actual keys which we are using in localstorage, ;;; localStorage=> enum
  removeValue(key: string, value: T): T | null {
    let oldStoredData = this.getItem(key);

    if (this.doesValueExist(key, value) && oldStoredData !== null) {
      oldStoredData.splice(oldStoredData.indexOf(value), 1);
      localStorage.setItem(key, JSON.stringify(oldStoredData));
      return value;
    }
    return null;
  }
}
