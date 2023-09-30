import React from 'react'
import NavBar from './Navbar';
import ProfileNavbar from './ProfileUpload';


const Team = () => {
  
  return (
    
    <>
    <NavBar/>
    <section class="max-w-screen-xl mx-auto py-20 px-8 lg:px-10">
  <h2 class="text-4xl xl:text-5xl capitalize text-center text-indigo-900 font-bold">our team</h2>
  <hr class="mx-auto w-12 h-1 outline-0 border-0 bg-green-300 block mt-4 mb-6"></hr>
  <p class="text-center text-xl text-gray-800">Our team consists only of the best talents</p>

  <div class="flex flex-col gap-6 mt-16">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://imgs.search.brave.com/c2hFo2dgr-PzPHAafPnOsBY9QPTUcd0Acq7GaOrD3ns/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmxpY2tvbmNsaWNr/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wOS9pbWFn/ZXMtMTMtNC5qcGVn" alt="Hanna Lubin" class="w-full h-full object-cover aspect-video lg:aspect-square"/>
      </div>
      <div class="w-full lg:w-9/12 bg-red-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">Das</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">some role</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row-reverse gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://imgs.search.brave.com/pboQ0XCSk43keV4apoNEoOMZkc1mGwff2K7IFjOVTls/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ2FkZ2V0czM2/MGNkbi5jb20vcHJp/Y2VlL2Fzc2V0cy9w/cm9kdWN0LzIwMjMw/My9zdG9yeV8xNjc4/OTY3OTE2LmpwZz9k/b3duc2l6ZT02ODA6/Kg" alt="Erin Calzoni" class="w-full h-full object-cover aspect-video lg:aspect-square"/>
      </div>
      <div class="w-full lg:w-9/12 bg-blue-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">Harold Das</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">Some Role</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://imgs.search.brave.com/qS38dLLoO0sGUehfP0jHNFiT00z5pYSkTc4CxF7Pf3w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMub3R0cGxheS5j/b20vaW1hZ2VzL2Fy/anVuLWFzLWhhcm9s/ZC1kYXMtaW4tbGVv/LTUwMy5qcGc_aW1w/b2xpY3k9b3R0cGxh/eS0yMDIxMDIxMCZ3/aWR0aD02MDA" alt="" class="w-full h-full object-cover aspect-video lg:aspect-square" />
      </div>
      <div class="w-full lg:w-9/12 bg-yellow-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">Leo Das</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">
          Some Role</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
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
      </div>
    </div>
  </div>
</section>
    </>
  )
};

export default Team;