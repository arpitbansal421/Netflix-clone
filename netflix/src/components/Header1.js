import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { API_END_POINT } from '../util/constant';
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser } from '../redux/userslice';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
    const user = useSelector((store) => store.app.user);
    const toggle = useSelector((store) => store.movie.toggle);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(user);
    
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${API_END_POINT}/logout`);
            if (res.data.success) {
                toast.success(res.data.message);
            }
            dispatch(setUser(null));
            navigate('/');
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };
    
    const toggleHandler = () => {
        dispatch(setToggle());
    };
    
    return (
        <div className='absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black'>
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
      {user && (
          <div className='flex items-center'>
          {console.log("Welcome to header Section")}
          <IoIosArrowDropdown size="24px" color='white' />
          <h1 className='text-lg font-medium text-white'>{user.Fullname}</h1>
          <div className='ml-4'>
            <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2 active:bg-red-900 hover:bg-red-400'>Logout</button>
            <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2  active:bg-red-900 hover:bg-red-400'>{toggle ? "Home" : "Search Movie"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
