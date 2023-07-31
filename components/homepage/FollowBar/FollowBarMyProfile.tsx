import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Link from "next/link";

const FollowBarMyProfile = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center">
          <div className="mr-2">
            <BsPersonCircle fontSize={56} />
          </div>
          <div>
            <div className="font-semibold">username</div>
            <div className="text-gray-400">Name Surname</div>
          </div>
        </div>
        <div className="flex items-center text-[#2BA6F6]">
          <Link href={""}>Geçiş Yap</Link>
        </div>
      </div>
    </div>
  );
};

export default FollowBarMyProfile;
