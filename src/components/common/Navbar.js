import React from "react";
import MainRouter from "../layout/MainRouter";
import Layout from "../layout/Layout";

const Navbar = () => {
  return (
    <>
      <header className="bg-primary shadow-lg py-4 text-white">
        <Layout layoutwidth="true">
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-xl font-bold">LOGO</h1>
            </div>
            <div>
              <ul className="flex items-center gap-3">
                <MainRouter />
              </ul>
            </div>
          </div>
        </Layout>
      </header>
    </>
  );
};

export default Navbar;
