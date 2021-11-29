import Axios from "axios";

import { BASE_API_URL } from "./constant";

class HomeService {
  async read(data) {
    try {
      const response = await Axios.get(
        `${BASE_API_URL}products/home`,
        {
          headers: { Authorization: `${data}` },
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

export default HomeService;
