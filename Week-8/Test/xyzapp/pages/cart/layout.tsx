import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>Car layout</h1>
      {children}
    </>
  );
};
