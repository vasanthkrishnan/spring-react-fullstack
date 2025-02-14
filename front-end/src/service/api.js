import axios from "axios";

const api = "http://localhost:8080/emp"

const addEmployee = (empData) => axios.post(`${api}/add`, empData)
const getEmployee = () => axios.get(`${api}/get`)
const deleteEmployee = (id) => axios.delete(`${api}/delete/${id}`)
const updateEmployee = (id, empData) => axios.put(`${api}/update/${id}`, empData)

export {addEmployee, getEmployee, deleteEmployee, updateEmployee}



