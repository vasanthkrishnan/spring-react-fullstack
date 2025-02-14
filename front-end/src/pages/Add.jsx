import React, { useRef } from 'react'
import { addEmployee } from '../service/api';

export const Add = () => {
  const nameRef = useRef(null);
  const salaryRef = useRef(null);
  const departmentRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const empData = {
      name : nameRef.current.value,
      salary : salaryRef.current.value,
      department : departmentRef.current.value,
      email : emailRef.current.value,
      phone : phoneRef.current.value
    }

    try{
      const response = await addEmployee(empData)
      if(response.status === OK) {
        console.log("Success")
      }
    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[50%] bg-gray-300 border border-gray-200 shadow-md rounded-md p-8 flex justify-center">
        <form className="space-y-4 w-full ">
          <input ref={nameRef} className="p-3 border rounded-md border-gray-400 w-[70%]" type="text" placeholder="Name" />
          <input ref={salaryRef} className="p-3 border rounded-md border-gray-400 w-[70%]" type="text" placeholder="Salary" />
          <input ref={departmentRef} className="p-3 border rounded-md border-gray-400 w-[70%]" type="text" placeholder="Department" />
          <input ref={emailRef} className="p-3 border rounded-md border-gray-400 w-[70%]" type="email" placeholder="Email" />
         <input ref={phoneRef} className="p-3 border rounded-md border-gray-400 w-[70%]" type="tel" placeholder="Phone" />
          <input onClick={handleFormSubmit} className="p-3 border rounded-md border-gray-400 bg-purple-500 cursor-pointer text-white text-xl hover:bg-purple-700 w-[70%]" type="button" value="Submit" />
        </form>
      </div>
    </div>

  )
}


export default Add;
