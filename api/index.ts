import axios, { AxiosResponse } from "axios";

// const apiKey = process.env.PIXABAY_API_KEY;
const apiKey = "26090029-bd9de456018039a43a7e2228d";
const apiUrl = `https://pixabay.com/api/?key=${apiKey}`;

interface Params {
  q?: string; // Optional search query (use encodeURIComponent if present)
  [key: string]: string | number | boolean | undefined; // Allow other parameters as strings, numbers, or booleans
}

interface ApiResponse {
  success: boolean;
  msg?: string; // Optional error message
  data?: any; // Add type for the actual data you expect from the API
}

const formatUrl = (params?: Params): string => {
  let url = apiUrl + "&per_page=25&safesearch=true&editors_choice=true";

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      const encodedValue =
        key === "q" ? encodeURIComponent(value as string) : value;
      url += `&${key}=${encodedValue}`;
    }
  }

  console.log("final url:", url);
  return url;
};

export const apiCall = async (params?: Params): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse = await axios.get(formatUrl(params));
    return { success: true, data: response.data };
  } catch (err: any) {
    console.error("Error occurred:", err.message);
    return { success: false, msg: err.message };
  }
};
