"use client";
import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import { GrAttachment } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai"

const ThreadShare = () => {
  const [rows, setRows] = useState<number>(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (event: any) => {
    const textarea = event.target;
    const previousRows = textarea.rows;
    textarea.rows = 1; 
    const currentRows = Math.ceil(textarea.scrollHeight / 20); 

    if (currentRows === previousRows) {
      textarea.rows = currentRows; 
    }

    textarea.style.height = "auto"; 
    textarea.style.height = `${textarea.scrollHeight}px`; 
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null); 

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="p-4 ">
      <div className="flex">
        <div className="pt-3 mr-4">
          {/* Link: clicked profil photo -> go profil, link yerine de rotur */}
          <Image
            className="rounded-full"
            src={"https://i.hizliresim.com/bdjn4bp.jpg"}
            alt="user profil photo"
            width={38}
            height={38}
          />
        </div>
        <div className="flex flex-col w-full ">
          <div className="text-lg">
            <span>
              <textarea
                rows={1}
                placeholder="Yazışma başlat..."
                onInput={handleInputChange}
                className="w-full p-2 resize-none overflow-y-hidden outline-none"
              ></textarea>
            </span>
            <div>
              {selectedFile && (
                <div className="p-2 max-w-lg overflow-hidden relative ">
                  <div
                    className="bg-gray-700 hover:bg-gray-600 -right-1 mr-5 mt-2 absolute p-1 rounded-full hover:cursor-pointer"
                    onClick={(): void => setSelectedFile(null)}
                  >
                    <AiOutlineClose className=" rounded-full fill-white "/>
                  </div>
                  <Image
                    className="w-full h-auto rounded-xl"
                    src={URL.createObjectURL(selectedFile)}
                    width={300}
                    height={300}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="cursor-pointer">
              <div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                  />
                </div>
                <div
                  onClick={handleIconClick}
                  className="hover:bg-gray-100 p-2 rounded-full transition duration-200"
                >
                  <GrAttachment />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-gray-300">Herkes yanıtlayabilir</div>
              <div className="text-[#2BA6F6] font-bold cursor-pointer">
                Paylaş
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadShare;
