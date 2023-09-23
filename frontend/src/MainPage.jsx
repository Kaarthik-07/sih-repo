import React, { useState } from 'react';
import ImageUpload from './ImageUpload';




const MainPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [newProfilePic, setNewProfilePic] = useState(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSaveProfile = () => {
    if (profilePic) {
      setNewProfilePic(profilePic);
    }
    closeProfile();
  };

  const handleProfileClick = () => {
    toggleProfile();
  };

  return (
    <>
      <div className="bg-white-100 p-1/2 flex justify-between items-center shadow-lg">
        <div className="text-black text-lg font-semibold focus:outline-none">Company Name</div>

        <div className="w-1/3 relative">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 border-2 border-white bg-white text-gray-800 focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600 absolute right-4 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4-4m0 0l-4-4m4 4l-4-4m4 4a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
        </div>

        <div className="relative mt-4">
          <button onClick={toggleChat} className="text-black font-semibold">
            24/7 Help
          </button>
          
          {isChatOpen && (
            <div className="absolute right-0 mt-8 w-64 bg-white p-4 rounded shadow-lg">
              <p>AI Chatbot</p>
              <p>Contact Us Form</p>
              <button onClick={closeChat} className="text-blue-500 mt-4">
                Close
              </button>
              
            </div>
          )}
          <div className='relative ml-28'>My Games</div>
        </div>
        <ImageUpload />
      </div>
      
      

      <div className="flex justify-center items-center h-screen">
        <div className="w-[934px] h-[850px] absolute right-[500px]">
          <div className="w-full h-full relative">
            <div className="w-[102px] h-[89px] absolute left-[250.5px] top-[197.71px] bg-[#4b21c3]"></div>
            <div className="w-[102px] h-[89px] absolute left-[999.5px] top-[559.71px] bg-[#4b21c3]"></div>
            <svg
              width="833"
              height="369"
              viewBox="0 0 833 369"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[292px] top-[214px] w-[833px] h-[369px]"
              preserveAspectRatio="none"
            >
              <path
                d="M0.5 25.5C0.5 11.6929 11.6929 0.5 25.5 0.5H807.5C821.307 0.5 832.5 11.6929 832.5 25.5V343.5C832.5 357.307 821.307 368.5 807.5 368.5H25.5C11.6929 368.5 0.5 357.307 0.5 343.5V25.5Z"
                fill="#EEF2F5"
              ></path>
            </svg>
            <p className="absolute left-[675px] top-[231px] text-2xl font-bold text-left text-[#ff6725]">XYZ</p>
            <p className="absolute left-[604px] top-[281px] text-4xl font-bold text-left text-[#4b21c3]">COMMUNITY</p>
            <p className="absolute left-[414px] top-[346px] text-base text-left text-black">
              <span className="text-base text-left text-black">"Empower kids with knowledge! Explore our website to teach children</span>
              <br />
              <span className="text-base text-left text-black">their legal rights and promote literacy."</span>
            </p>
            <div className="w-[151px] h-[51px] absolute left-[626.5px] top-[429.5px] rounded-[25px] bg-[#ff6725]"></div>
            <button className="absolute left-[639px] top-[445px] text-base font-bold text-left text-white">START MODULE</button>
          </div>
        </div>
       
      </div>

      


      
    </>
  );
};

export default MainPage;
