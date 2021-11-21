import Axios from "axios";

import { BASE_API_URL, TEST_API_URL } from "./constant";

class ProductService {
  async create(data, token) {
    try {
      const response = await Axios.post(`${BASE_API_URL}product/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async read(token) {
    try {
      const response = await Axios.get(`${TEST_API_URL}products`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async edit(data, token) {
    try {
      const response = await Axios.patch(`${TEST_API_URL}products`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async delete(data, token) {
    try {
      const response = await Axios.patch(`${TEST_API_URL}products`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default ProductService;
