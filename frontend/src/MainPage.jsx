import React, { useState  , useEffect} from 'react';
import ImageUpload from './components/ProfileUpload';
import ChooseCarousel from './components/ChooseCarousel';




const MainPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [newProfilePic, setNewProfilePic] = useState(null);
  useEffect(() => {
    // Add your IntersectionObserver code here
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hiddenn');
    const hiddenElementsy = document.querySelectorAll('.hiddenny');
    const hiddenElementsf = document.querySelectorAll('.hiddennf');

    
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElementsy.forEach((el) => observer.observe(el));
    hiddenElementsf.forEach((el) => observer.observe(el));

    // Don't forget to clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElementsy.forEach((el) => observer.unobserve(el));
      hiddenElementsf.forEach((el) => observer.observe(el));
    };
  }, []);
 
  
  

    
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
  <div class="shadow-xl  w-8/12 rounded-lg text-center md-30 p-20 hiddenn">
    <div class="text-orange-400 font-bold text-xl"><h1>Right's Quest</h1></div>

    <div class="text-violet-600 font-bold text-lg"><h1>Community</h1></div>
    
    <div class="mt-4 text-gray-700">
    Our mission is to empower the youth of India, specifically children aged 8-16, by equipping them with knowledge, confidence, and a supportive community to understand and assert their rights. Through a comprehensive platform, we aim to catalyze a positive transformation in the lives of these young individuals.
    </div>
    
    <button class="mt-4 bg-orange-500 rounded-md p-2 text-white">Start Module</button>
   </div>
    </div>
      
      
    <ChooseCarousel />
  


<div class="flex justify-center items-center min-h-screen">
  <div class="my-16 font-black text-[25px] w-full text-center flex flex-col items-center px-16">
    <div class="text-lg text-orange-400 mt-10 p-3">About Our Website</div> 
    <div class="flex flex-row items-center justify-center">
        <div class="border-2 shadow-md border-black rounded-md p-2 px-6 hiddennf">Our Mission</div>
      </div>
      <div class="h-14 w-1 bg-black mt-2 mb-2"></div>
      <div class="bg-accent mx-12 border-2 p-6 font-black text-3xl text-center bg-blue-200 rounded-lg hiddenny">
        We're on a mission to make learning about laws and regulations an exciting and engaging experience for kids aged 8-16.
      </div>
      <div class="h-14 w-1 bg-black mt-2 mb-2"></div>
    <div class="flex flex-row items-center justify-center">
      <div class="border-2 shadow-md border-black rounded-md p-2 mt-10 px-6 hiddennf">Why Gamified Learning</div>
    </div>
    <div class="h-14 w-1 bg-black mt-2 mb-2"></div>
    <div class="bg-accent mx-12 border-2 p-6 font-black text-3xl text-center bg-blue-200 rounded-lg hiddenny">
      Gamification transforms complex legal concepts into fun and interactive games, fostering curiosity, critical thinking, and problem-solving skills in children.
    </div>
    <div class="h-14 w-1 bg-black mt-2 mb-2"></div>
    <div class="flex flex-row items-center justify-center">
      <div class="border-2 shadow-md border-black rounded-md p-2 mt-10 px-6 hiddennf">What Sets Us Apart</div>
    </div>
    <div class="h-14 w-1 bg-black mt-2 mb-2"></div>
    <div class="bg-accent mx-12 border-2 p-6 font-black text-3xl text-center bg-blue-200 rounded-lg hiddenny">
      Engaging Storylines, Interactive Quizzes, Rewards, and Achievements
    </div>
    <div class="h-14 w-1 bg-black mt-2 mb-2"></div>
    <div class="flex flex-row items-center justify-center">
      <div class="border-2 shadow-md border-black rounded-md p-2 mt-10 px-6 hiddennf">Join Us on the Adventure</div>
    </div>
    <div class="h-14 w-1 bg-black mt-2 mb-2"></div>
    <div class="bg-accent mx-12 border-2 p-6 font-black text-3xl text-center bg-blue-200 rounded-lg hiddenny">
      Let's inspire a new generation of informed and responsible citizens together.
    </div>
    
  </div>
</div>  
<div class="flex justify-center items-center h-screen mt-[-12rem] ">
  <p class="w-3 h-12 bg-red-400 rounded-full m-1"></p>
  <br />
  <p className="w-2 h-10 bg-orange-300 rounded-full m-1"></p>
  <p class="w-2 h-8 bg-blue-500 rounded-full m-1 "> </p>
  <p class="text-xl font-bold text-red-500 m-1">XYZ </p>
  <p class="text-sm font-bold text-blue-600">Community</p>



</div>
<h1 class="text-center font-bold mt-[-18rem] text-xl">High level experience in web design and development knowledge, producing quality work.
</h1>  
<div class="flex justify-center">
  <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 mt-20 px-14 rounded-xl">
    Contact Us
  </button>
</div>

<svg
  width="100%"
  height="278"
  viewBox="0 0 915 178"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    d="M-53 0L45.1784 25.4067C106.535 41.2847 171.044 40.2748 231.873 22.484V22.484C282.476 7.68444 335.759 4.45975 387.777 13.0489L416.58 17.8048C467.595 26.2283 519.662 26.0384 570.614 17.2428L586.868 14.437C641.969 4.92519 698.476 7.45828 752.505 21.8621V21.8621C818.579 39.477 888.138 39.2828 954.113 21.2991L956.132 20.7488C1006.38 7.05151 1058.84 3.42621 1110.5 10.0815L1148.91 15.0301C1191.21 20.4802 1234.04 20.4953 1276.34 15.0748L1394 0V185H-53V0Z"
    fill="#0052D4"
    fill-opacity="0.8"
  ></path>
</svg>
<div className='footer' style={{display:'flex' , flexDirection:'row' , justifyContent:'space-evenly' , alignItems:'center'}}>
<p className="text-center mt-[-5rem]  text-white font-medium">Terms of use</p>
<p className="mt-[-5rem] text-white font-medium">2023 All Rights Reserved</p>
<p className="mt-[-5rem] text-white font-medium">Privacy And Policy</p>
</div>


    </>
  );
};

export default MainPage;


