import ProfileNavbar from "./ProfileUpload";
import { useNavigate } from 'react-router-dom';


const NavBar = ()=>{
    const navigate = useNavigate();
    return(
    <>
    <header  class="fixed z-40 flex items-center justify-between w-screen px-4 overflow-hidden text-lg bg-white border-b-2 shadow-md h-header border-bsprime">
  <div class="w-1/6">
    <a class="text-3xl font-bold text-violet-500" href="/">Child Cronicles</a>
  </div>
  <nav class="flex flex-row items-center justify-center w-4/6 gap-10">
    <span class="font-extrabold text-accent transition-colors rsease-in-out hover:text-accent active:text-blue-400" onClick={()=>navigate('/main')}>HOME</span>
    <span class="font-extrabold text-black transition-colors ease-in-out hover:text-accent active:text-blue-400" onClick={()=> navigate('/help')}>24/7 help</span>
    <span class="font-extrabold text-black transition-colors ease-in-out hover:text-accent active:text-blue-400" onClick={()=>navigate('/games')}>My Games</span>
    <span class="font-extrabold text-black transition-colors ease-in-out hover:text-accent  active:text-blue-400">TEAM</span>
  </nav>
  <ProfileNavbar/>
</header>
    </>
    )
    
}

export default NavBar;