import Link from "next/link";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";

const FollowSuggestionCard = () => {
  const suggestionUsers = [
    {
      profilPhoto: BsPersonCircle,
      username: "recepoksuz_",
    },
    {
      profilPhoto: BsPersonCircle,
      username: "selcuksepya",
    },
    {
      profilPhoto: BsPersonCircle,
      username: "_knrs",
    },
    {
      profilPhoto: BsPersonCircle,
      username: "kursaderduhan",
    },
    {
      profilPhoto: BsPersonCircle,
      username: "zuck",
    },
  ];

  return (
    <div>
      <div className="py-2 mb-4">
        {suggestionUsers.map((suggestion, key) => (
          <div className="flex justify-between items-center m-1 text-xs">
            <div className="flex items-center gap-2.5">
              <div>{<suggestion.profilPhoto fontSize={34}/>}</div>
              <div className="flex flex-col">
                <div className="text-sm">{suggestion.username}</div>
                <div className="text-gray-400">Senin için öneriliyor</div>
              </div>
            </div>
            <div className="text-[#2BA6F6]">
              <Link href={""}>Takip Et</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowSuggestionCard;
