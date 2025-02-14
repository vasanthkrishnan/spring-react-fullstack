import axios from "axios";

const api = "http://localhost:8080/emp"

const addEmployee = (empDate) => axios.post(`${api}/add`, empDate)
const getEmployee = () => axios.get(`${api}/get`)
const deleteEmployee = (id) => axios.delete(`${api}/delete/${id}`)

export {addEmployee, getEmployee, deleteEmployee}



