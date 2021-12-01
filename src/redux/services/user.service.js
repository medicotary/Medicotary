import Axios from "axios";
import { BASE_API_URL } from "./constant";

class UserService {
  async update(data) {
    try {
      const response = await Axios.post(
        `${BASE_API_URL}http://localhost:8080/auth/${data.id}`,
        data.data,
        {
          headers: { Authorization: `${data.token}` },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default UserService;
