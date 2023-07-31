import React from "react";
import FollowBarBody from "./FollowBarBody";
import FollowBarFooter from "./FollowBarFooter";

const FollowBar = () => {
  return (
    <div className="pt-8 w-[295px]">
      <div className="p-2">
        <FollowBarBody/>
        <FollowBarFooter/>
      </div>
    </div>
  );
};

export default FollowBar;
