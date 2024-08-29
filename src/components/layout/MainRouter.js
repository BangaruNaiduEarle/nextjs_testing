import Link from "next/link";
import React from "react";

const MainRouter = () => {
  return (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
    </>
  );
};

export default MainRouter;
