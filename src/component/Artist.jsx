import React, { useState } from "react";
import ThaiArtists from './ThaiArtists';
import NationalArtists from './NationalArtists';
import Beloved from './Beloved';

const Artist = () => {
  const [activeTab, setActiveTab] = useState('NationalArtists');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="2xl:container">
      <div className="flex justify-center items-center pt-40">
        <img src="../src/assets/artist-img.png" alt="" width={400} />
      </div>
      <div className="max-w-screen-xl mx-auto mt-12 mb-14 flex text-center border-b border-gray-400 pb-10 relative">
        <div className="w-1/3 flex justify-center">
          <p
            className={`w-44 text-xl cursor-pointer ${activeTab === 'ThaiArtists' ? 'text-yellow-600' : ''}`}
            onClick={() => handleTabClick('ThaiArtists')}
          >
            Thai Artists
          </p>
        </div>
        <div className="w-1/3 flex justify-center">
          <p
            className={`w-44 text-xl cursor-pointer ${activeTab === 'NationalArtists' ? 'text-yellow-600' : ''}`}
            onClick={() => handleTabClick('NationalArtists')}
          >
            National Artists
          </p>
        </div>
        <div className="w-1/3 flex justify-center">
          <p
            className={`w-44 text-xl cursor-pointer ${activeTab === 'Beloved' ? 'text-yellow-600' : ''}`}
            onClick={() => handleTabClick('Beloved')}
          >
            Beloved
          </p>
        </div>
        <div
          className={`absolute bottom-0 h-1 bg-yellow-600 transition-all duration-500 ease-in-out ${activeTab === 'ThaiArtists' ? 'left-0 w-1/3' :
            activeTab === 'NationalArtists' ? 'left-1/3 w-1/3' :
              'left-2/3 w-1/3'
            }`}
        ></div>
      </div>
      {activeTab === 'ThaiArtists' && <ThaiArtists />}
      {activeTab === 'NationalArtists' && <NationalArtists />}
      {activeTab === 'Beloved' && <Beloved />}
    </div>
  );
};

export default Artist;
