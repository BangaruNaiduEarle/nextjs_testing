import React from "react";
import MetaData from "./MetaData";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const MainLayout = ({ children, title, description, keywords, img }) => {
  return (
    <>
      <MetaData
        title={title}
        description={description}
        keywords={keywords}
        img={img}
      />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
