import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

const baseURL = import.meta.env.VITE_REACT_APP_API_URL;

type MessageResponse<T> = { message: T };

interface UseApiResponse<T> {
  data: T | undefined;
  error: string | null;
  loading: boolean;
  request: (config: AxiosRequestConfig) => void;
  setData: React.Dispatch<React.SetStateAction<T | undefined>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const useAuth = <T>(forceLoading?: boolean): UseApiResponse<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(forceLoading ?? false);
  const { mutate } = useMutation<T, Error, AxiosRequestConfig>(
    async (config: AxiosRequestConfig) => {
      setLoading(true);
      const response = await axios({
        ...config,
        url: `${baseURL}${config.url}`,
      });
      return response.data;
    },
    {
      onSuccess: (msg) => {
        setData((msg as MessageResponse<T>).message ?? msg);
      },
      onError: (err) => {
        if (axios.isAxiosError(err) && err.response?.data.error) {
          setError(err.response.data.error);
        } else {
          setError(err.message || "An unexpected error occurred");
        }
      },
      onSettled: async () => {
        setLoading(false);
      },
    }
  );

  const request = (config: AxiosRequestConfig): void => {
    mutate(config);
  };
  return {
    data: data,
    error: error,
    loading: loading,
    request,
    setData,
    setError,
  };
};
