import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { ethers } from "ethers";
import myEpicNft from "./utils/MyEpicNFT.json";
import { Switch, Route, Link } from "react-router-dom";
import logo from "./media/logo_final.png";
import Header from "./components/Header";
import MetadataContext from "./context/MetadataContext";
import Album from "./components/Album.js";
import MyVerticallyCenteredModal from "./utils/utils";
import Info from "./components/Info";
import Mint from "./components/Mint";

const OPENSEA_LINK = "https://testnets.opensea.io/collection/exumbrae-v4";

const CONTRACT_ADDRESS = "0x4dA64a152dD7d55F1F9111F696def94f54878EC1";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [openSeaAPI, setOpenSeaAPI] = useState("");
  const [userNftCollection, setUserNftCollection] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    // if (!ethereum) {
    //   console.log("Make sure you have metamask!");
    //   return;
    // } else {
    //   console.log("We have the ethereum object", ethereum);
    // }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
      setOpenSeaAPI(
        `https://rinkeby-api.opensea.io/api/v1/assets?owner=${account}&asset_contract_address=${CONTRACT_ADDRESS}&order_direction=desc&offset=0&limit=50`
      );
      setupEventListener(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      setupEventListener(accounts[0]);
      setOpenSeaAPI(
        `https://rinkeby-api.opensea.io/api/v1/assets?owner=${accounts[0]}&asset_contract_address=${CONTRACT_ADDRESS}&order_direction=desc&offset=0&limit=50`
      );

      fetch(openSeaAPI, { method: "GET" })
        .then((response) => response.json())
        .then((data) => setUserNftCollection(data))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  const setupEventListener = async (account) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          myEpicNft.abi,
          signer
        );

        connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
          if (from.toLowerCase() === account) {
            console.log(from, tokenId.toNumber());
            return window.alert(
              `Your invocation was successful and your hero is on the way. It can take a maximum of 10 minutes to show up in your Album and on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`
            );
          }
        });

        console.log("Setup event listener!");
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderNotConnectedContainer = () => (
    <>
      <button className="cta-button" onClick={() => setModalShow(true)}>
        About
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <button
        onClick={connectWallet}
        className="cta-button connect-wallet-button"
      >
        Connect to Wallet
      </button>
    </>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    fetch(openSeaAPI, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setUserNftCollection(data))
      .catch((err) => console.error(err));
  }, [openSeaAPI]);

  return (
    <MetadataContext.Provider value={{ userNftCollection }}>
      <Switch>
        <Route path="/collection/:id?">
          <Header onShowSidebar={showSidebar} sidebar={sidebar} />
          <Album CONTRACT_ADDRESS={CONTRACT_ADDRESS} />
        </Route>
        <Route path="/info">
          <Header onShowSidebar={showSidebar} sidebar={sidebar} />
          <Info />
        </Route>
        <Route path="/mint">
          <Header onShowSidebar={showSidebar} sidebar={sidebar} />
          <Mint CONTRACT_ADDRESS={CONTRACT_ADDRESS} />
        </Route>
        <Route path="/">
          <div className="App">
            <div className="container">
              <div className="header-container">
                <img src={logo} alt="logo" />
                <p className="font-face-magic">Ex Umbrae</p>
                <p className="sub-text">NFT Trading Card Game</p>
                <div className="button-container">
                  {currentAccount === "" ? (
                    renderNotConnectedContainer()
                  ) : (
                    <>
                      <Link to="/mint">
                        <button className="cta-button opensea-button">
                          Summon
                        </button>
                      </Link>
                      <Link to="/collection">
                        <button className="cta-button opensea-button">
                          My Cards
                        </button>
                      </Link>
                    </>
                  )}
                  <button
                    onClick={() => window.open(OPENSEA_LINK, "_blank")}
                    className="cta-button opensea-button"
                  >
                    Collection on OpenSea
                  </button>
                </div>
              </div>
              <div className="footer-container"></div>
            </div>
          </div>
        </Route>
      </Switch>
    </MetadataContext.Provider>
  );
};

export default App;
