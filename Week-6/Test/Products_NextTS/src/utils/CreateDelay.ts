export function createDelay(component: Promise<any>) {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }).then(() => component);
  }