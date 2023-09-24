import React, { useState } from 'react';
import ImageUpload from './components/ProfileUpload';
import ChooseCarousel from './components/ChooseCarousel';



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
      
      <div class="flex justify-center items-center h-screen ">
  <div class="shadow-xl  w-8/12 rounded-lg text-center md-30 p-20">
    <div class="text-orange-400 font-bold text-lg"><h1>XYZ</h1></div>

    <div class="text-violet-600 font-bold text-2xl"><h1>Community</h1></div>
    
    <div class="mt-4 text-gray-700">
      Empower kids with knowledge! Explore our website to teach children
      their legal rights and promote literacy.
    </div>
    
    <button class="mt-4 bg-orange-500 rounded-md p-2 text-white">Start Module</button>
  </div>
</div>

     
       
      

      <ChooseCarousel />


      <div class="flex justify-center items-center h-screen">
  <div class="w-3 h-12 bg-red-400 rounded-full m-1"></div>
  <br />
  <div class="w-2 h-10 bg-orange-300 rounded-full m-q"></div>
  <div class="w-2 h-8 bg-blue-500 rounded-full m-1 "> </div>
  <div class="text-xl font-bold text-red-500 m-1">XYZ </div>
  <div class="text-sm font-bold text-blue-600">Community</div>

</div>

      


      
    </>
  );
};

export default MainPage;


