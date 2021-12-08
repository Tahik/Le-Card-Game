import React from "react";
import "../styles/components/Info.css";

function Info() {
  return (
    <div className="info-container">
      <div className="lore-text">
        <h1 className="info-font-face-magic">Lore</h1>
        <p className="info-text">
          Ex Umbrae - from the shadows. Since the birth of the Terra Magnifica,
          something lives in the shadows. Something that devours worst of our
          emotions. Hate, greed, glutony...All of those and more make mysterious
          inhabitants of shadows stronger and stronger. And for millenia there
          are people who are trying to figure out mysteries of the shadows.
          These practices however carry inherent sin, because those who wish to
          step into the shadow and feed on its powers must offer a live
          sacrifice. Some do it without blink of an eye to gain power. Some to
          it from despair.......Because......
          <b>
            <i>Monstra nostra exit ab umbris</i>
          </b>
          ......Our monsters step out from the shadow.
        </p>
        {/* <div>
          {" "}
          <img
            className="image-wizard"
            src="https://gateway.pinata.cloud/ipfs/QmYMHNmcj6KKFPQ1DaSYnN9zqwZqXLz3vjAw6KeV1Rg2dS/purple_wiz_500x900.png"
          />
        </div> */}
      </div>
      <div className="about-classes-text">
        <h1 className="info-font-face-magic">Classes</h1>
        <p className="info-text">
          There are three main groups of magically gifted that reach to the
          shadows.
        </p>
        <h3 className="class-text">Wizards</h3>
        <p className="info-text">
          Wizards are really interesting group of various level of education and
          preference of shadow or light. Their education varies from home
          schooled wizardz, educated by local village wizard, to wizards
          educated at coutry schools up to the wizardy elite educated at few
          elite <b>Academia Veneficus</b>-Wizardry Academies. Not all wizards
          try to step into the shadows, or even think about it. But those who
          do, establish very careful aproach, since live sacrifice takes a great
          toll on a soul of human being.
        </p>
        <h3 className="class-text">Warlocks</h3>
        <p className="info-text">
          Most of the warlocks started as wizards, again various education and
          backgrounds. What separates them from wizards is lack of remorse and a
          will to take steps necessary to gain power fron the shadows. Blood and
          live sacrifice are necessary to reach this level of abilities. There
          are not many warlocks since a toll taken on a human soul is incredible
          and most of them end up taking their own lives after series of
          sacrifices.
        </p>
        <h3 className="class-text">Necromancers</h3>
        <p className="info-text">
          Origin of necromancers is unknown to us. Trough human sacrifice and
          dark magic they cheated death possibly for centuries. This however
          chnaged their human nature, if they had one to begin with, to the
          extend where they cannot be even compared to the humans.
        </p>
      </div>
      <div className="about-nfts-text">
        <h1 className="info-font-face-magic">About NFTs</h1>
        <p className="info-text">
          A non-fungible token (NFT) is a unique and non-interchangeable unit of
          data stored on a digital ledger (blockchain).[1] NFTs can be
          associated with easily-reproducible items such as photos, videos, 3D
          models, audio, and other types of digital files as unique items
          (analogous to a certificate of authenticity). NFTs use blockchain
          technology to provide a public proof of ownership. Copies of the
          original file are not restricted to the owner of the NFT, and can be
          copied and shared like any file. The lack of interchangeability
          (fungibility) distinguishes NFTs from blockchain cryptocurrencies,
          such as Bitcoin.
        </p>
      </div>
      <div className="about-project-text">
        <h1 className="info-font-face-magic">About this project</h1>
        <p className="info-text">
          This project is final project of WBS Coding School Web-Development
          bootcamp. All art pieces are property of their recpective creators. It
          is not our intend to infringe any copyrights, and we will remove any
          art when ask to do so immediatelly.
        </p>
      </div>
    </div>
  );
}

export default Info;
