import {useCallback, useEffect, useRef} from 'react';

type TimerId = ReturnType<typeof setTimeout> | null;
const useTimer = (func: () => void, ms: number) => {
  const timerId = useRef<TimerId>(null);

  const onClear = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
      timerId.current = null;
    }
  }, []);

  useEffect(() => {
    timerId.current = setTimeout(func, ms);
    return onClear;
    // eslint-disable-next-line
  }, []);

  return [onClear];
};
export default useTimer;
