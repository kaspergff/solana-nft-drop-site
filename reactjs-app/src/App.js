import React, { useEffect, useState } from 'react';
// import './App.css';
import CandyMachine from './CandyMachine';
import NavBar from './Components/NavBar/NavBar';

import "@material-tailwind/react/tailwind.css";

const App = () => {

  // State
const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');

          /*
         * The solana object gives us a function that will allow us to connect
         * directly with the user's wallet!
         */
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );

          setWalletAddress(response.publicKey.toString());

        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
  const connectWallet = async () => {
    const { solana } = window;
  
    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  /*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  /*
   * When our component first mounts, let's check to see if we have a connected
   * Phantom Wallet
   */
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <>
    <NavBar />
    <div className="App">
    <div className="container">

      <div className="header-container">
        <p className="header">🍭 Candy Drop</p>
        <p className="sub-text">NFT drop machine with fair mint</p>
        {!walletAddress && renderNotConnectedContainer()}
      </div>
      {/* Check for walletAddress and then pass in walletAddress */}
    {walletAddress && <CandyMachine walletAddress={window.solana} />}
    </div>
  </div>
  </>
  );
};

export default App;
