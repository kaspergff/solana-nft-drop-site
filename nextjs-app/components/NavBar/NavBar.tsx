import React, { useEffect } from "react"
import { useState } from "react"
import Link from "next/link"
import classNames from "classnames"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

const Navbar: React.FC<{page:string}> = ({page}) => {
  const [currentMenu, setCurrentMenu] = useState("")
  const menuItems = ["Mint", "Your", "Test", "Contact"]
  useEffect(() =>{
    setCurrentMenu(page)
  },[page])

  return (
    <nav className=' hidden md:flex flex-row  px-8 rounded-b-3xl bg-white shadow-lg justify-between'>
      <span className='text-3xl text-gray-800 '>NFT Drop</span>
      <ul className='flex flex-row justify-self-center'>
        {menuItems.map((item, index) => (
          <li
            className={classNames([
              " text-gray-400 hover:text-gray-700 cursor-pointer font-medium text-md px-3 pt-3",
              currentMenu === item &&
                "text-gray-700 rounded-b-sm border-b-2 border-gray-700 bg-gradient-to-b from-white to-gray-100",
            ])}
            key={index}
            onClick={() => setCurrentMenu(item)}
          >
            <Link href={item == "Mint" ? '/' : '/' + item}>{item}</Link>

            {/* {item} */}
          </li>
        ))}
      </ul>

      <div className='flex flex-row'>
        <div className=' scale-[0.80] '>
          <WalletMultiButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
