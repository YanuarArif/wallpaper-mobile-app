import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.PIXABAY_API_KEY;
const apiUrl = `https://pixabay.com/api/?key=${apiKey}`;

const formatUrl = (params) => {
  let url = apiUrl + "&per_page=25$safesearch=true&editors_choice=true";
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
  } catch (err: any) {
    console.log("Terjadi Error!", err.message);
    return { success: false, msg: err.message };
  }
};
