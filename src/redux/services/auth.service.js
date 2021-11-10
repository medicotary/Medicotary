import Axios from "axios";

import { BASE_API_URL } from "./constants";

class AuthService {
  async login(data) {
    try {
      const response = await Axios.post(`${BASE_API_URL}/auth/login`, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default AuthService;
