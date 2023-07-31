import React from "react";
import Image from "next/image";
import leftbarTabsData from "@/data/leftbar/leftbarTabsData";
import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";

const LeftBar = () => {
  return (
    <div className={`flex flex-col justify-between px-2 pb-5 pt-3  xl:w-56 border-r`}>
      <div>
        <div className="py-3 px-2">
          <div className="cursor-pointer max-xl:hidden">
            <Image
              src={"https://i.hizliresim.com/336cmmu.png"}
              width={110}
              height={30}
              alt="Threads"
            />
          </div>
          <div className="cursor-pointer xl:hidden">
            <Image
              src={"https://i.hizliresim.com/r86r9xx.png"}
              width={30}
              height={30}
              alt="Threads"
            />
          </div>
        </div>
        <div>
          <div>
            {leftbarTabsData.map((tab, key) => (
              <Link href={""}>
                <div className="flex items-center w-full gap-4 py-2 px-3 my-3 mr-3 text-base rounded-md hover:bg-gray-100 transition duration-200">
                  <div className=""> {<tab.outlineIcon fontSize={24} />}</div>
                  <div className="max-xl:hidden"> {tab.title} </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-4 py-2 px-3 my-3 mr-3 text-base rounded-md hover:bg-gray-100 transition duration-200 cursor-pointer">
        <div className=""> {<HiOutlineBars3 fontSize={24} />}</div>
        <div className="max-xl:hidden"> Daha Fazla </div>
      </div>
    </div>
  );
};

export default LeftBar;

// 220*73
