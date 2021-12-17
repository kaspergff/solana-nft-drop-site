import React, { useState } from "react"
import classNames from "classnames"
import Link from "next/link"
import { AiFillHome, AiFillMail } from "react-icons/ai"
import {IoIosInformationCircle} from 'react-icons/Io'

const Tabbar = () => {
  const [currentMenu, setCurrentMenu] = useState("Mint")
  const menuItems = ["Mint", "Your NFT's", "Test", "Contact"]

  const getIcon = (item) => {
    switch (item) {
      case "Mint":
        return <AiFillHome />
      case "Your NFT's":
        return <IoIosInformationCircle />
      case "Test":
        return <AiFillMail />
      case "Contact":
        return <AiFillMail />
    }
  }

  return (
    <nav className='flex md:hidden flex-row items-center justify-around px-8 h-18 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl shadow-lg'>
      {menuItems.map((item, index) => (
        <span
          key={index}
          className={classNames([
            " transition ease-in-out py-4 text-gray-400 hover:text-gray-700 cursor-pointer font-medium text-md px-3",
            currentMenu === item &&
              " text-gray-400  rounded-b-sm border-t-2 border-gray-700 bg-gradient-to-t from-white to-gray-200",
          ])}
          onClick={() => setCurrentMenu(item)}
        >
          {/* <Link href={item == "Home" ? "/" : "/" + item}>{getIcon(item)}</Link> */}
          {getIcon(item)}
        </span>
      ))}
    </nav>
  )
}

export default Tabbar
