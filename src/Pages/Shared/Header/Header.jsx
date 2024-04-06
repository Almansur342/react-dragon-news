import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
  return (
    <div className='text-center mt-7'>
     <img className='mx-auto mb-5 text-[#444444]' src={logo} alt="" />
     <p className='mb-2 text-lg text-[#706F6F]'>Journalism Without Fear or Favour </p>
     <p className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;