
export class LocalStorageManagement {
    
  setItem(key: string, value: number) {
    const oldStoredData = this.getItem(key);
    console.log(oldStoredData);
    if (oldStoredData == null) {
      localStorage.setItem(key, JSON.stringify([value]));
      console.log("First Data set");
    }
    if (oldStoredData != null && !oldStoredData.includes(value)) {
      localStorage.setItem(key, JSON.stringify([...oldStoredData, value]));
      console.log("Data Set Successfully");
    }
  }

  getItem(key: string) {
    const oldStoredData: string | null = localStorage.getItem(key);
    if (oldStoredData != null) {
      const localData: number[] = JSON.parse(oldStoredData);
      return localData;
    }
    return null;
  }

  doesValueExits(key: string, value: number) {
    const oldStoredData = this.getItem(key);
    return oldStoredData?.includes(value);
  }

  removeValue(key: string, value: number) {
    let oldStoredData: number[] | null = this.getItem(key);
    if (this.doesValueExits(key, value)) {
      oldStoredData?.splice(oldStoredData.indexOf(value), 1);
      localStorage.setItem(key, JSON.stringify(oldStoredData));
    }
    return value;
  }
}
