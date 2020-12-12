import { NextApiHandler } from 'next';

import { getRandomPhotos } from '../../utils/apiResp';
import { IAPIResp, IError } from '../../utils/types';

const getRand: NextApiHandler<IAPIResp[] | IError> = async (_, res) => {
  try {
    const resp = await getRandomPhotos();
    res.send(resp);
  } catch {
    res.status(500).send({ error: 'An Error Occurred' });
  }
};

export default getRand;
