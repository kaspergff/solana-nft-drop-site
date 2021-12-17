import Head from "next/head"
import { useEffect, useState } from "react"

import useCandyMachine from "../hooks/useCandyMachine"
import useWalletBalance from "../hooks/useWalletBalance"
import { useWallet } from "@solana/wallet-adapter-react"

import Countdown from "react-countdown"
import useWalletNfts from "../hooks/useWalletNFTs"
import AnNFT from "../components/AnNFT/AnNFT"

import NavBar from "../components/NavBar/NavBar"
import Tabbar from "../components/Tabbar/Tabbar"

import Image from "next/image"
import * as examples from "../public/examples/"

export default function Home() {
  const [balance] = useWalletBalance()
  const { isSoldOut, mintStartDate, isMinting, startMint, nftsData } =
    useCandyMachine()

  const [isLoading, nfts] = useWalletNfts()

  const { connected } = useWallet()

  const [isMintLive, setIsMintLive] = useState(false)

  const [img1, setImg1] = useState(examples.img1)
  const [img2, setImg2] = useState(examples.img2)
  const [img3, setImg3] = useState(examples.img3)

  const changeImages = () => {
    let arr = [
      examples.img1,
      examples.img2,
      examples.img3,
      examples.img4,
      examples.img5,
      examples.img6,
      examples.img7,
      examples.img8,
      examples.img9,
    ]
    const randomIndex1 = Math.floor(Math.random() * arr.length)
    const randomIndex2 = Math.floor(Math.random() * arr.length)
    const randomIndex3 = Math.floor(Math.random() * arr.length)
    setImg1(arr[randomIndex1])
    setImg2(arr[randomIndex2])
    setImg3(arr[randomIndex3])

    // setTimeout(()=>changeImages, 200000000000000)
  }

  // useEffect(() => {
  //   if (new Date(mintStartDate).getTime() < Date.now()) {
  //     setIsMintLive(true)
  //   }
  //   changeImages()
  // }, [])

  useEffect(() => {
    if (new Date(mintStartDate).getTime() < Date.now()) {
      setIsMintLive(true)
    }
    const interval = setInterval(() => {
      changeImages()
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>next-candy-machine</title>
        <meta
          name='description'
          content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-gray-300 h-screen overflow-y-scroll'>
        <NavBar page="Mint"/>
        <Tabbar />
        <div className='flex flex-col items-center p-10'>
          <div className='max-w-xl rounded overflow-hidden shadow-lg p-2'>
            <div className='flex gap-1'>
              <Image className='w-full rounded-md' src={img1} alt='Mountain' />
              <Image className='w-full rounded-md' src={img2} alt='Mountain' />
              <Image className='w-full rounded-md' src={img3} alt='Mountain' />
            </div>
            <div className='flex flex-col px-6 py-4'>
              <div className='self-center font-bold text-xl mb-2'>
                Mint your random generated NFT
              </div>
              {!connected && (
                <p className='text-center font-bold'>Connect wallet to mint</p>
              )}
              <p className='text-gray-700 '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            {/* {connected && ( */}
            <div className='flex flex-row place-content-between px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                Price: 0.5 SOL
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                Total: {nftsData.itemsAvailable}
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                Minted: {nftsData.itemsRedeemed}
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                Available: {nftsData.itemsRemaining}
              </span>
            </div>
            {/* )} */}
            <div className=''>
              {connected ? (
                <>
                  {new Date(mintStartDate).getTime() < Date.now() ? (
                    <>
                      {isSoldOut ? (
                        <p>SOLD OUT</p>
                      ) : (
                        <>
                          <div className='flex flex-col items-center justify-space-between '>
                            <h1 className='mx-auto mb-5 text-3xl font-bold'>
                              Mint NFT
                            </h1>
                            <div className='flex mb-5 flex-row items-center'>
                              <p className='text-md font-semibold text-gray-800 '>
                                Your balance
                              </p>
                              <p className='text-md mx-1 font-bold leading-none'>
                                {balance}
                              </p>
                              <p
                                className='text-md font-bold leading-none text-transparent bg-clip-text'
                                style={{
                                  backgroundImage: `linear-gradient(to bottom right, #00FFA3, #03E1FF, #DC1FFF)`,
                                }}
                              >
                                SOL
                              </p>
                            </div>
                            <button
                              onClick={startMint}
                              disabled={isMinting}
                              className='px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600'
                            >
                              {isMinting ? "loading" : "mint 1 NFT"}
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <Countdown
                      date={mintStartDate}
                      onMount={({ completed }) =>
                        completed && setIsMintLive(true)
                      }
                      onComplete={() => setIsMintLive(true)}
                    />
                  )}
                </>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
