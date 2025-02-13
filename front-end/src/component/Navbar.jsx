import React from 'react'
import { NavLink } from 'react-router-dom';
import '../assets/css/index.css'

export const Navbar = () => {
    const navLink = [
        {
            title : "Add Employee",
            url : "/",
        },
        {
            title : "Update Employee",
            url : "/update",
        },
        {
            title : "Delete Employee",
            url : "/delete",
        },
        {
            title : "Display Employee",
            url : "/get",
        }
    ]
  return (
    <>
        <div className='h-[8vh] w-screen bg-[#f9f9f9] shadow-md flex items-center'>
            <div className='h-[90%] w-[10%] ml-5 flex justify-center items-center text-2xl'>EMS</div>
            <div className='h-[90%] w-[70%] flex justify-center items-center ml-10 gap-5'>
            {
                navLink.map((data, index)=> (
                    <NavLink key={index} to={data.url}>
                        <ul className='px-[.5rem] py-[.5rem] rounded-md hover:bg-gray-200'>{data.title}</ul>
                    </NavLink>
                ))
            }
            </div>
        </div>
    </>
  )
}

export default Navbar;
