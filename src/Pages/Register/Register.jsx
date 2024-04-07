import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  // console.log(createUser);
 

  const handleRegister = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get('name'));
    const photo = (form.get('photo'));
    const email = (form.get('email'));
    const password = (form.get('password'));
    console.log(email,password,photo,name);

    // create user
    createUser(email,password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error =>{
      console.error(error);
    })


  }
  
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <Navbar></Navbar>
      <div className="bg-white md:w-3/4 lg:w-1/2 mx-auto">
      <h2 className="text-3xl my-10 text-center">Please Register</h2>
      <form onSubmit={handleRegister} className="p-7 space-y-3">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
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
        <p className="text-center mt-3">Already have An Account ? <Link to='/login' className="text-primary font-bold">Login</Link></p>
      </form>
      </div>
     
    </div>
  );
};

export default Register;