import Axios from "axios";
import { BASE_API_URL } from "./constant";

class UserService {
  async update(data) {
    try {
      console.log("data", data);
      const response = await Axios.patch(
        `${BASE_API_URL}auth/${data.id}`,
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
