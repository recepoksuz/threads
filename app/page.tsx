import React from "react";
import Tabs from "@/components/leftbar/LeftBar";
import Flow from "@/components/homepage/Flow";
import FollowBar from "@/components/homepage/FollowBar/FollowBar";
import TopBar from "@/components/homepage/TopBar";

const Page = () => {
  return (
    <div>
      <div className="flex h-full w-full">
        <div className="sticky">
          <div className="flex justify-center ml-2 min-h-screen">
            <Tabs />
          </div>
        </div>
        <div className="flex w-full justify-center gap-4">
          <div className="">
            <TopBar/>
            <Flow />
          </div>
          <div className={`hidden lg:block`}>
            <FollowBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
