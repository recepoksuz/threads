import React from "react";
import TopBar from "./TopBar";
import ThreadShare from "./ThreadShare";

const Flow = () => {
  return (
    <div>
      <div className={`flex flex-col  md:min-w-[600px]`}>
          <ThreadShare />
      </div>
    </div>
  );
};

export default Flow;
