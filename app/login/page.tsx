"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import footerLinks from "@/data/login/FooterLinks";

const page = () => {
  
  const [inUsername, setUsername] = useState("")
  const [inPassword, setPassword] = useState("")


  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex justify-center m-9 ">
        <div className="mr-9 max-lg:hidden">
          <Image
            src="https://i.guim.co.uk/img/media/0a665c859559221c3f10459bbe54295225b5bc34/0_169_5000_3000/master/5000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=acc74a3fc42efa0f4731ae8076bb89b6"
            width={400}
            height={500}
            alt="Demo Threads"
            className="h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center :w-full pt-3">
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-sm px-10 py-3 mb-3">
            <div className="text-bold text-5xl cursor-pointer  mb mt- p-2 flex ">
              <Image
              src={"https://i.hizliresim.com/336cmmu.png"}
              width={175}
              height={50}
              alt="Threads"
              />
            </div>
            <div className="mb-2">
              <form action="" className="flex flex-col gap-2 mt-6">
                <input
                  value={inUsername}
                  onChange={e=>setUsername(e.target.value)}
                  id="username"
                  type="text"
                  className="border border-gray-300 bg-gray-50 rounded-sm px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-200 text-xs w-64 h-9"
                  placeholder="Kullanıcı Adınızı Girin"
                />
                <input
                  value={inPassword}
                  onChange={e=>setPassword(e.target.value)}
                  id="password"
                  type="password"
                  className="border border-gray-300 bg-gray-50 rounded-sm px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-200 text-xs w-64 h-9"
                  placeholder="Şifre"
                />
              </form>
            </div>
            <div className="bg-black text-white rounded-md w-full flex justify-center items-center my-2 h-8 text-sm cursor-pointer">
              Giriş Yap
            </div>
            <div className="text-xs mt-2">
              <Link 
              href={"https://www.instagram.com/accounts/password/reset/"}
              target="_blank"
              >
                Şifreni mi unuttun?
              </Link>
            </div>
          </div>
          <div className={`flex items-center justify-center border border-gray-300 rounded-sm py-4 w-full  text-sm`}>
            <span className="flex gap-1 ">
              <p>Hesabın yok mu? </p>
              <Link
                className="font-semibold"
                href={"https://www.instagram.com/accounts/emailsignup/"}
                target="_blank"
              >
                Kaydol
              </Link>
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mx-5 my-2.5">
              Uygulamayı indir
            </div>
            <div className="flex gap-2 my-2.5">
              <Link href={"https://play.google.com/store/apps/details?id=com.instagram.barcelona"} target="_blank">
                <Image src={"https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png"} alt="Google Play'dan indir" width={150} height={40}/>
              </Link>
              <Link href={"https://apps.apple.com/us/app/threads-an-instagram-app/id6446901002"} target="_blank">
                <Image src={"https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png"} alt="Apple Store'dan indir" width={120} height={40}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="align-bottom text-center mb-8 text-gray-500 text-xs px-2">
        <div>
          {footerLinks.map((link, key) => (
            <Link className="cursor-pointer mx-2" href={link.url} target="_blank">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <div>Türkçe</div>
          <div>© 2023 Recep Öksüz Tarafından</div>
        </div>
      </div>
    </div>
  );
};

export default page;
