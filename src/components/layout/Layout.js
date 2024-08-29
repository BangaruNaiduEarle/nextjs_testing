import React from "react";

const Layout = ({ children, layoutwidth = "flase" }) => {
  return (
    <>
      {layoutwidth === "true" ? (
        <div className="mx-auto max-w-screen-2xl px-5 w-full">{children}</div>
      ) : (
        <div className="mx-auto px-5 w-full">{children}</div>
      )}
    </>
  );
};

export default Layout;
