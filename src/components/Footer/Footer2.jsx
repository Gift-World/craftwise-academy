import { FaTwitter,  FaFacebook  } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-[#000b16] py-4 px-20 text-center">
  <div className="flex justify-between items-center">
    {/* <a href="#" className="text-white text-2xl font-bold">CraftWise Academy</a> */}
    <p className="text-gray-400">&copy; 2025 CraftWise Academy. All Rights Reserved</p>
    <ul className="flex space-x-4">
      <li className="flex justify-center items-center w-12 h-12 rounded-full border border-[#1aeeef] hover:bg-[#1aeeef] transition duration-500">
        <a href="#"><FaTwitter size={20} /></a>
      </li>
      <li className="flex justify-center items-center w-12 h-12 rounded-full border border-[#1aeeef] hover:bg-[#1aeeef] transition duration-500">
        <a href="#"><FaFacebook size={20}/></a>
      </li>
      {/* <li className="flex justify-center items-center w-12 h-12 rounded-full border border-[#1aeeef] hover:bg-[#1aeeef] transition duration-500">
        <a href="#"><FaInstagram size={20}/></a>
      </li>
      <li className="flex justify-center items-center w-12 h-12 rounded-full border border-[#1aeeef] hover:bg-[#1aeeef] transition duration-500">
        <a href="#"><FaTiktok size={20}/></a>
      </li> */}

     
    </ul>
    
  </div>
</footer>

  );
}