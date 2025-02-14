import React, { useEffect, useState } from 'react';
import { deleteEmployee, getEmployee } from '../service/api';

export const Get = () => {
  const[employees, setEmployees] = useState([])

    const fetchEmployee = async () => {
      try {
        const response = await getEmployee()
        setEmployees(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchEmployee()

  const handleDelete = async (id) => {
    try {
      const response = await deleteEmployee(id)
      fetchEmployee()
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchEmployee()
  },[])

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-100 table-auto border-collapse shadow-md">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="px-5 py-3 border">Id</th>
            <th className="px-5 py-3 border">Name</th>
            <th className="px-5 py-3 border">Salary</th>
            <th className="px-5 py-3 border">Department</th>
            <th className="px-5 py-3 border">Email</th>
            <th className="px-5 py-3 border">Phone</th>
            <th className="px-5 py-3 border">Delete</th>
            <th className="px-5 py-3 border">Update</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => (
            <tr key={data.id} className="border-b hover:bg-gray-100">
              <td className="px-5 py-3">{data.id}</td>
              <td className="px-5 py-3">{data.name}</td>
              <td className="px-5 py-3">{data.salary}</td>
              <td className="px-5 py-3">{data.department}</td>
              <td className="px-5 py-3">{data.email}</td>
              <td className="px-5 py-3">{data.phone}</td>
              <td>
                <input onClick={() => handleDelete(data.id)} type="button" value="Delete" className='bg-red-600 text-white text-xl px-3 py-1 rounded-md cursor-pointer hover:bg-red-700' />
              </td>
              <td>
                <input type="button" value="Update" className='bg-blue-600 text-white text-xl px-3 py-1 rounded-md cursor-pointer hover:bg-blue-700' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Get;
