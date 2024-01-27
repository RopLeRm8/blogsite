import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
interface UseApiResponse<T> {
  data: T | null;
  setData: React.Dispatch<React.SetStateAction<T | null>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  request: (config: AxiosRequestConfig) => Promise<void>;
}

export const useRegister = <T>(): UseApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (config: AxiosRequestConfig): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios({
        ...config,
        url: `${baseURL}${config.url}`,
      });
      setData(response.data.message);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.error);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, error, setError, setData, loading, request };
};
