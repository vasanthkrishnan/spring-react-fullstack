import React, { useEffect, useState } from "react";
import { deleteEmployee, getEmployee, updateEmployee } from "../service/api";

export const Get = () => {
  const [employees, setEmployees] = useState([]);
  const [updateForm, setUpdateForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    salary: "",
    department: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await getEmployee();
      setEmployees(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployee();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdateClick = (employee) => {
    setUpdateForm(true);
    setSelectedEmployee(employee);
    setFormData({
      name: employee.name,
      salary: employee.salary,
      department: employee.department,
      email: employee.email,
      phone: employee.phone,
    });
  };

  const handleUpdateSubmit = async () => {
    try {
      await updateEmployee(selectedEmployee.id, formData);
      fetchEmployee();
      setUpdateForm(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              {["Id", "Name", "Salary", "Department", "Email", "Phone", "Actions"].map((heading) => (
                <th key={heading} className="px-6 py-3 border">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((data) => (
              <tr key={data.id} className="border-b hover:bg-gray-100 text-center">
                <td className="px-6 py-3">{data.id}</td>
                <td className="px-6 py-3">{data.name}</td>
                <td className="px-6 py-3">{data.salary}</td>
                <td className="px-6 py-3">{data.department}</td>
                <td className="px-6 py-3">{data.email}</td>
                <td className="px-6 py-3">{data.phone}</td>
                <td className="px-6 py-3 flex justify-center space-x-2">
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdateClick(data)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {updateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h2 className="text-lg font-semibold text-center mb-4">Update Employee</h2>
            <form className="space-y-3">
              <input
                className="p-2 border rounded-md w-full"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                className="p-2 border rounded-md w-full"
                type="text"
                placeholder="Salary"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              />
              <input
                className="p-2 border rounded-md w-full"
                type="text"
                placeholder="Department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              />
              <input
                className="p-2 border rounded-md w-full"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                className="p-2 border rounded-md w-full"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setUpdateForm(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleUpdateSubmit}
                  className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Get;
