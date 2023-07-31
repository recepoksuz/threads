import React from "react";
import FollowSuggestionCard from "./FollowSuggestionCard";
import { BsPersonCircle } from "react-icons/bs";
import FollowBarMyProfile from "./FollowBarMyProfile";
const FollowBarBody = () => {
  return (
    <div>
      <div>
        <div className="mb-2.5">
          <FollowBarMyProfile />
        </div>
        <div>
          <div className="flex justify-between items-center font-bold font-sans ">
            <div className="text-sm text-gray-400">Senin için öneriler</div>
            <div className="text-xs text-gray-500">Tümünü Gör</div>
          </div>
          <div>
            <FollowSuggestionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowBarBody;
