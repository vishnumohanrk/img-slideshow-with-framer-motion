import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import useSWR from 'swr';

import AppButton from '@/components/AppButton';
import ExternalLink from '@/components/ExternalLink';
import MetaHead from '@/components/MetaHead';
import {
  duration,
  fetcher,
  finalCP,
  initCP,
  pCls,
  transition,
} from '@/utils/constants';
import { TNum, TPhoto } from '@/utils/types';

const AppHome = () => {
  const { data, error } = useSWR('/api/randomPhotos', fetcher, {
    revalidateOnFocus: false,
  });

  const [num, setNum] = useState<TNum>(1);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  if (error) return <p className={pCls}>An Error Occurred</p>;
  if (!data) return <p className={pCls}>LOADING...</p>;

  const photos = data as TPhoto[];
  const { authorLink, authorName, photoSrc } = photos[currentSlideIndex];

  const next = () => {
    setIsAnimating(true);
    setCurrentSlideIndex(
      currentSlideIndex + 1 < photos.length ? currentSlideIndex + 1 : 0,
    );
  };

  const prev = () => {
    setIsAnimating(true);
    setCurrentSlideIndex(
      currentSlideIndex - 1 <= -1 ? photos.length - 1 : currentSlideIndex - 1,
    );
  };

  const handleAnimEnd = () => setIsAnimating(false);

  return (
    <>
      <MetaHead />

      <main className="relative w-full h-full overflow-y-hidden">
        <AnimatePresence custom={num}>
          <div key={currentSlideIndex} className="w-full h-full">
            <motion.div
              className="w-full h-full absolute inset-0"
              initial={{ clipPath: initCP, y: `${num * 100}%` }}
              animate={{
                clipPath: [initCP, initCP, finalCP],
                y: [`${num * 100}%`, '0%', '0%'],
                transition,
              }}
              exit={{
                clipPath: [finalCP, initCP, initCP],
                y: ['0%', '0%', `${num * -100}%`],
              }}
              transition={{ type: 'tween', duration }}
              onAnimationComplete={handleAnimEnd}
            >
              <div
                aria-hidden
                className="hidden md:block absolute w-full h-full z-10 bg-gradient-to-r from-trueGray-900 to-transparent"
              />
              <img
                src={photoSrc}
                alt={`by ${authorName}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0, originX: 0, originY: 0 }}
              animate={{ scale: [0, 0, 1], transition }}
              exit={{ scale: [1, 0, 0] }}
              className="w-max absolute overflow-hidden text-2xl md:text-4xl lg:text-6xl top-2 left-2 md:top-[10%] md:left-4 lg:top-[30%] lg:left-[10%] h-[4.5rem]"
            >
              <ExternalLink src={authorLink} text={authorName} />
              <span className="text-sm">
                &nbsp;on&nbsp;
                <ExternalLink src="https://unsplash.com/" text="Unsplash" />
              </span>
            </motion.div>
          </div>
        </AnimatePresence>
      </main>

      <div className="flex gap-2 absolute bottom-4 right-8 z-50">
        <AppButton
          onPress={prev}
          setNum={setNum}
          isDisabled={isAnimating}
          index={-1}
          btnText="Previous"
        />
        <AppButton
          onPress={next}
          setNum={setNum}
          isDisabled={isAnimating}
          index={1}
          btnText="Next"
        />
      </div>
      <p aria-hidden className="absolute bottom-4 left-4 text-xs">
        {currentSlideIndex + 1}/{photos.length}
      </p>
    </>
  );
};

export default AppHome;
