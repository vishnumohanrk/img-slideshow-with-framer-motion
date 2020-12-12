/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';

import { IAPIResp } from './types';

const axiosInstance = Axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
  },
});

export const getRandomPhotos = async (): Promise<IAPIResp[]> => {
  const { data } = await axiosInstance.get('/photos/random', {
    params: {
      count: 30,
    },
  });

  return (data as any[]).map(i => ({
    picID: i.id,
    picSrc: i.urls.regular,
    picDescription: i.description,
    userLink: i.user.links.html,
    userName: i.user.name,
  }));
};
