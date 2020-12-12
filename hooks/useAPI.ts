import axios from 'axios';
import useSWR from 'swr';

import { IAPIResp } from '../utils/types';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const useAPI = () => {
  const { data, error } = useSWR(`/api/random`, fetcher, { revalidateOnFocus: false });

  return {
    data: data as IAPIResp[],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAPI;
