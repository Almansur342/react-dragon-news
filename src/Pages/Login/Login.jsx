import { Link,useLocation,useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
const {signIn} = useContext(AuthContext);
const location = useLocation();
  console.log(location);
  const navigate = useNavigate()


  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result => {
      console.log(result.user);
      // navigate after login
      navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
      console.error(error);
    })
  }
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <Navbar></Navbar>
      <div className="bg-white md:w-3/4 lg:w-1/2 mx-auto">
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form onSubmit={handleLogin} className="p-7">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold text-lg">Login</button>
        </div>
        <p className="text-center mt-3">Do not Have An Account ? <Link to='/register' className="text-primary font-bold">Register</Link></p>
      </form>
      </div>
     
    </div>
  );
};

export default Login;