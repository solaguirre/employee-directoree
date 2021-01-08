import axios from "axios";

const BASEURL = "https://randomuser.me/api/"

const employeeAPI = {
    getEmployees: () => axios.get(BASEURL)
};

export default employeeAPI;