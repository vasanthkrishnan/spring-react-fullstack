import React from 'react'
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';

export const WebLayout = () => {
  return (
    <>
            <Navbar />
            <div className='h-[92vh] w-screen flex justify-center items-center'>
                  <Outlet />
            </div>

    </>
  )
}


export default WebLayout;
