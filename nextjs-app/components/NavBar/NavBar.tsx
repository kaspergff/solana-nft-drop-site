import React from "react"
import { useState } from "react"
import Link from "next/link"
import classNames from "classnames"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

const Navbar: React.FC<{ balance: number; connected: boolean }> = ({
  balance,
  connected,
}) => {
  const [currentMenu, setCurrentMenu] = useState("Home")
  const menuItems = ["Home", "About", "Test", "Contact"]

  return (
    <nav className='hidden md:flex flex-row  px-8 rounded-b-3xl bg-white shadow-lg justify-between'>
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
            {/* <Link href={item == "Home" ? '/' : '/' + item}>{item}</Link> */}
            {item}
          </li>
        ))}
      </ul>

     

      <div className='scale-[0.80] static'>
        <WalletMultiButton />
        {connected && (
        <div className='absolute py-2 flex flex-row items-center'>
          <p className='text-xl font-semibold text-gray-800 '>balance</p>
          <p className='text-xl mx-1 font-bold leading-none'>{balance}</p>
          <p
            className='text-xl font-bold leading-none text-transparent bg-clip-text'
            style={{
              backgroundImage: `linear-gradient(to bottom right, #00FFA3, #03E1FF, #DC1FFF)`,
            }}
          >
            SOL
          </p>
        </div>
      )}
      </div>
    </nav>
  )
}

export default Navbar
