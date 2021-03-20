export const pCls =
  'w-max absolute overflow-hidden text-2xl md:text-4xl lg:text-6xl top-2 left-2 md:top-[10%] md:left-4 lg:top-[30%] lg:left-[10%]';

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json());

export const duration = 1.2;

export const initCP = 'circle(10% at 70% 50%)';

export const finalCP = 'circle(58% at 70% 50%)';

export const transition = { delay: duration / 2 };
