import React from 'react';
import { AxiosError, AxiosResponse } from 'axios';

export type LoadDataType<T = any> = Promise<AxiosResponse<T> | undefined>;

export type AxiosType<T = any> = {
  data: T | null;
  error: null | AxiosError;
  loading: boolean;
  loadData: (axios: Promise<AxiosResponse>) => LoadDataType<T>;
  clear: () => void;
};

type ResponseType = AxiosResponse | any;

const useAxios = (): AxiosType => {
  const [state, setState] = React.useState({
    data: null,
    error: null,
    loading: false,
  });

  const loadData = async (axios: Promise<AxiosResponse>): LoadDataType => {
    setState({ data: null, error: null, loading: true });
    try {
      const responseData: ResponseType = await axios;
      if (responseData) {
        setState({ data: responseData.data, error: null, loading: false });
        return responseData;
      }
    } catch (error) {
      setState(prevState => ({ ...prevState, error, loading: false }));
      throw error;
    }
    return undefined;
  };

  const clear = () => {
    setState({ data: null, error: null, loading: false });
  };

  return { ...state, loadData, clear };
};

export default useAxios;
