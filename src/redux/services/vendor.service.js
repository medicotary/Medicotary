import Axios from "axios";

import { BASE_API_URL } from "./constant";

class VendorService {
  async create(data) {
    try {
      const response = await Axios.post(
        `${BASE_API_URL}vendor/createVendor`,
        data
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default VendorService;
