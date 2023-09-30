import React from 'react'
import NavBar from './Navbar';
import ProfileNavbar from './ProfileUpload';


const Team = () => {
  
  return (
    
    <>
  <header  class="fixed z-40 flex items-center justify-between w-screen px-4 overflow-hidden text-lg bg-white border-b-2 shadow-md h-header border-bsprime">
  <div class="w-1/6">
    <a class="text-3xl font-bold text-violet-500" href="/">Child Cronicles</a>
  </div>
  <nav class="flex flex-row items-center justify-center w-4/6 gap-10">
    <span class="font-extrabold text-accent transition-colors rsease-in-out hover:text-accent active:text-blue-400" style={{cursor:'pointer'}} onClick={()=>navigate('/main')}>HOME</span>
    <span class="font-extrabold text-black transition-colors ease-in-out hover:text-accent active:text-blue-400"  style={{cursor:'pointer'}} onClick={()=> navigate('/help')}>24/7 help</span>
    <span class="font-extrabold text-black transition-colors ease-in-out hover:text-accent active:text-blue-400" style={{cursor:'pointer'}}  onClick={()=>navigate('/games')}>My Games</span>
    <span class="font-extrabold text-black transition-colors ease-in-out hover:text-accent  active:text-blue-400" style={{cursor:'pointer'}} onClick={()=>navigate('/team')}>TEAM</span>
  </nav>
  <ProfileNavbar/>
</header>
    <section class="max-w-screen-xl mx-auto py-20 px-8 lg:px-10">
  <h2 class="text-4xl xl:text-5xl capitalize text-center text-indigo-900 font-bold">our team</h2>
  <hr class="mx-auto w-12 h-1 outline-0 border-0 bg-green-300 block mt-4 mb-6"></hr>
  <p class="text-center text-xl text-gray-800">Our team consists only of the best talents</p>

  <div class="flex flex-col gap-6 mt-16">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden "data-aos="fade-up">
        <img src="https://imgs.search.brave.com/c2hFo2dgr-PzPHAafPnOsBY9QPTUcd0Acq7GaOrD3ns/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmxpY2tvbmNsaWNr/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wOS9pbWFn/ZXMtMTMtNC5qcGVn" alt="Hanna Lubin" class="w-full h-full object-cover aspect-video lg:aspect-square"/>
        
      </div>
      <div class="w-full lg:w-9/12 bg-red-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">Das</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">some role</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
        <h3 class="flex flex-row gap-2 mt-10"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Kaarthik-07"><svg enable-background="new 0 0 32 32" height="32px" class="h-5 w-5" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="#181616" fill-rule="evenodd"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg></a><a target="_blank" rel="noopener noreferrer" href="www.linkdein.com/in/kaarthik-raja-9a7038257"><svg height="100%" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-5 w-5"><path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"></path></svg></a></h3>
      </div>
    </div>
    <div class="flex flex-col md:flex-row-reverse gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://imgs.search.brave.com/pboQ0XCSk43keV4apoNEoOMZkc1mGwff2K7IFjOVTls/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ2FkZ2V0czM2/MGNkbi5jb20vcHJp/Y2VlL2Fzc2V0cy9w/cm9kdWN0LzIwMjMw/My9zdG9yeV8xNjc4/OTY3OTE2LmpwZz9k/b3duc2l6ZT02ODA6/Kg" alt="Erin Calzoni" class="w-full h-full object-cover aspect-video lg:aspect-square"/>
      </div>
      <div class="w-full lg:w-9/12 bg-blue-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold mt-10">Harold Das</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">Some Role</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
                <h3 class="flex flex-row gap-2 mb-5 mt-10"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Sai-Dithvika"><svg enable-background="new 0 0 32 32" height="32px" class="h-5 w-5" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="#181616" fill-rule="evenodd"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg></a><a target="_blank" rel="noopener noreferrer" href="www.linkdein.com/in/sai-dithvika"><svg height="100%" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-5 w-5"><path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"></path></svg></a></h3>
      
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://imgs.search.brave.com/qS38dLLoO0sGUehfP0jHNFiT00z5pYSkTc4CxF7Pf3w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMub3R0cGxheS5j/b20vaW1hZ2VzL2Fy/anVuLWFzLWhhcm9s/ZC1kYXMtaW4tbGVv/LTUwMy5qcGc_aW1w/b2xpY3k9b3R0cGxh/eS0yMDIxMDIxMCZ3/aWR0aD02MDA" alt="" class="w-full h-full object-cover aspect-video lg:aspect-square" />
      </div>
      <div class="w-full lg:w-9/12 bg-yellow-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold mt-10">Leo Das</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">
          Some Role</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
         <h3 class="flex flex-row gap-2 mb-5 mt-10"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Kaarthik-07"><svg enable-background="new 0 0 32 32" height="32px" class="h-5 w-5" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="#181616" fill-rule="evenodd"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg></a><a target="_blank" rel="noopener noreferrer" href="www.linkdein.com/in/kaarthik-raja-9a7038257"><svg height="100%" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-5 w-5"><path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"></path></svg></a></h3>

      </div>
    </div>
    <div class="flex flex-col md:flex-row-reverse gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://imgs.search.brave.com/vpcTHFuHUpISiWsHJ0F8eCD8LFg9bo0mB6joA05l_rk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy83ZGU2ZjMy/ZDZhZmJlYThiOWZl/NGNkOTBkZGEwNTQ5/Mzg3YjkwN2ZkNWZh/MWM2NzI1MjE3ODVk/MDk5NjFkZTM2Lmpw/Zw" alt="" class="w-full h-full object-cover aspect-video lg:aspect-square "/>
      </div>
      <div class="w-full lg:w-9/12 bg-green-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">Arjun Das</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">Some role</span>
        
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
        <h3 class="flex flex-row gap-2 mt-10"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Kaarthik-07"><svg enable-background="new 0 0 32 32" height="32px" class="h-5 w-5" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="#181616" fill-rule="evenodd"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg></a><a target="_blank" rel="noopener noreferrer" href="www.linkdein.com/in/kaarthik-raja-9a7038257"><svg height="100%" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-5 w-5"><path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"></path></svg></a></h3>

      </div>
    </div>
  </div>
</section>
    </>
  )
};

export default Team;