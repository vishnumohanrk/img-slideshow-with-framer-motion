import { NextApiHandler } from 'next';

import { TError, TPhoto } from '@/utils/types';

const randomPhotos: NextApiHandler<TPhoto[] | TError> = async (_, res) => {
  const apiResp = await fetch(
    'https://api.unsplash.com/photos/random?orientation=landscape&count=15',
    {
      headers: {
        'Accept-Version': 'v1',
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
      },
    },
  );

  if (apiResp.ok) {
    const data = await apiResp.json();

    res.send(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (data as any[]).map(i => ({
        photoID: i.id,
        photoSrc: i.urls.regular,
        authorLink: i.user.links.html,
        authorName: i.user.name,
      })),
    );

    return;
  }

  res.status(500).send({
    error: 'NA',
  });
};

export default randomPhotos;
