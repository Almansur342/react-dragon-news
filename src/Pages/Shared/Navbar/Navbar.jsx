import { Link, NavLink } from "react-router-dom";
import userDefaultProfile from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then(result => {
      console.log(result.user);
      // setUser(result.user);
    })
    .catch(error =>{
      console.error(error);
    })
  }

  const navLink = <>
    <li><NavLink className="text-[#706F6F] text-lg" to="/">Home</NavLink></li>
    <li><NavLink className="text-[#706F6F] text-lg" to="/about">About</NavLink></li>
    <li><NavLink className="text-[#706F6F] text-lg" to="/career">Career</NavLink></li>
    <li><NavLink className="text-[#706F6F] text-lg" to="/register">addict</NavLink></li>

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-4">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={userDefaultProfile} />
          </div>
        </div>
        {
          user ?
            <Link to='/'>
              <button onClick={handleSignOut} className="px-6 font-semibold text-xl text-white bg-[#403F3F] py-1">Sign out</button>
            </Link>
            :
            <Link to='/login'>
              <button className="px-6 font-semibold text-xl text-white bg-[#403F3F] py-1">Login</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;