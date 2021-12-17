import React, { useState } from "react"
import classNames from "classnames"
import Link from "next/link"
import { AiFillHome, AiFillMail } from "react-icons/ai"
import { SiSpeedtest } from "react-icons/Si"
import {IoIosInformationCircle} from 'react-icons/Io'

const Tabbar = () => {
  const [currentMenu, setCurrentMenu] = useState("Home")
  const menuItems = ["Home", "About", "Test", "Contact"]

  const getIcon = (item: any) => {
    switch (item) {
      case "Home":
        return <AiFillHome />
      case "About":
        return <IoIosInformationCircle />
      case "Test":
        return <SiSpeedtest />
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
