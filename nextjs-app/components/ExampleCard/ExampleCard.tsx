import Image from "next/image"
import * as examples from "../../public/examples/29.png"

const ExampleCard: React.FC<{ connected: boolean; nftsData: any }> = ({
  connected,
  nftsData,
}) => {
  return (
    <div className='p-10'>
      <div className='max-w-xl rounded overflow-hidden shadow-lg p-2'>
        <div className='flex gap-1'>
          <Image className='w-full rounded-md' src={examples} alt='Mountain' />
          <Image className='w-full rounded-md' src={examples} alt='Mountain' />
          <Image className='w-full rounded-md' src={examples} alt='Mountain' />
        </div>
        <div className='flex flex-col px-6 py-4'>
          <div className='self-center font-bold text-xl mb-2'>
            Mint your random generated NFT
          </div>
          {!connected && (
            <span className=' bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 '>
              <p className='text-center'>Connect wallet to mint</p>
            </span>
          )}
          <p className='text-gray-700 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        {connected && (
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
        )}


      </div>
    </div>
  )
}

export default ExampleCard
