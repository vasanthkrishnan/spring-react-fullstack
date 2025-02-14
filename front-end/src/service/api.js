import axios from "axios";

const api = "http://localhost:8080/emp"

const addEmployee = (empDate) => axios.post(`${api}/add`, empDate)


export {addEmployee}



