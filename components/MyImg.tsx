import { IAPIResp } from '../utils/types';
import ExternalLink from './ExternalLink';
import MyImgText from './MyImgText';

const TheImg = ({ picDescription, picSrc, userName, userLink }: IAPIResp) => (
  <div className="relative w-full h-full mainCardChild">
    <img
      src={picSrc}
      alt={picDescription || `pic by ${userName}`}
      className="object-cover w-full h-full"
      width="100%"
      height="100%"
    />
    <div className="absolute top-0 z-50 p-3">
      <MyImgText
        elem={
          <>
            Photo by
            <ExternalLink name={userName} src={userLink} />
            on
            <ExternalLink name="Unsplash" src="https://unsplash.com/" />
          </>
        }
        cls="text-xs italic text-gray-700"
      />
      <MyImgText cls="text-lg font-semibold" elem={picDescription} />
    </div>
  </div>
);

export default TheImg;
