import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2>Login with</h2>
        <button className="btn btn-outline w-full text-primary text-lg">
         <IoLogoGoogle></IoLogoGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full text-lg">
         <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2>Find Us On</h2>
        <a className=" gap-3 w-full font-medium flex items-center border rounded-t-lg p-4 text-[#706F6F] text-lg">
         <FaFacebook></FaFacebook>
         Facebook
        </a>
        <a className="w-full gap-3 font-medium flex items-center border p-4 text-[#706F6F] text-lg">
         <FaTwitter></FaTwitter>
          Twitter
        </a>
        <a className=" w-full gap-3 font-medium flex items-center border rounded-b-lg p-4 text-[#706F6F] text-lg">
         <FaInstagram></FaInstagram>
          Instagram
        </a>
      </div>

      {/* q zone */}
      <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3]">
      <h2 className="text-xl font-semibold">Q Zone</h2>
        <img className=" border-2 mb-5 border-dashed" src={qZone1} alt="" />
        <img className=" border-2 mb-5 border-dashed" src={qZone2} alt="" />
        <img className=" border-2 mb-5 border-dashed" src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
