import React from 'react'
import Link from 'next/link'
import footerLinks from "@/data/login/FooterLinks";

const Footer = () => {
  return (
    <div>
        <div className="align-bottom text-center mb-8 text-gray-300 text-xs px-2">
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
  )
}

export default Footer