import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './data.js';
import Name from './Name.jsx';
import Library from './Library.jsx';
import Documents from './Documents.jsx';
import Other from './Other.jsx';

const Profile = () => {
  let { id } = useParams();
  const selectData = data.find((item) => item.id === Number(id));

  const [activeTab, setActiveTab] = useState('Name');

  if (!selectData) {
    return <div>Artist not found</div>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="h-0 pb-[100%] relative">
        <img className="object-cover w-72 h-72 absolute top-44 bottom-0 left-14 right-0 rounded-full" src={selectData.imgSrc} alt={selectData.artist} />
        <div>
          <img className="object-cover w-full h-96 pt-28" src="../src/assets/8.jpg" alt="" />
        </div>
        <div className='max-w-screen-md mx-auto flex flex-col text-center'>
          <div className="max-w-screen-xl mx-auto mt-12 mb-8 flex text-center pb-10 relative">
            <div className="w-1/4 flex justify-center">
              <p
                className={`w-44 text-xl cursor-pointer ${activeTab === 'Name' ? 'text-yellow-600' : ''}`}
                onClick={() => handleTabClick('Name')}
              >
                Name
              </p>
            </div>
            <div className="w-1/4 flex justify-center">
              <p
                className={`w-44 text-xl cursor-pointer ${activeTab === 'Library' ? 'text-yellow-600' : ''}`}
                onClick={() => handleTabClick('Library')}
              >
                Library
              </p>
            </div>
            <div className="w-1/4 flex justify-center">
              <p
                className={`w-44 text-xl cursor-pointer ${activeTab === 'Documents' ? 'text-yellow-600' : ''}`}
                onClick={() => handleTabClick('Documents')}
              >
                Documents
              </p>
            </div>
            <div className="w-1/4 flex justify-center">
              <p
                className={`w-44 text-xl cursor-pointer ${activeTab === 'Other' ? 'text-yellow-600' : ''}`}
                onClick={() => handleTabClick('Other')}
              >
                ...
              </p>
            </div>
            <div
              className={`absolute bottom-0 h-1 bg-yellow-600 transition-all duration-500 ease-in-out ${activeTab === 'Name' ? 'left-0 w-1/4' :
                activeTab === 'Library' ? 'left-1/4 w-1/4' :
                  activeTab === 'Documents' ? 'left-2/4 w-1/4' :
                    'left-3/4 w-1/4'
                }`}
            ></div>
          </div>
          {activeTab === 'Name' && <Name selectData={selectData} />}
          {activeTab === 'Library' && <Library />}
          {activeTab === 'Documents' && <Documents />}
          {activeTab === 'Other' && <Other />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
