import {useEffect, useRef} from 'react';

const usePrev = <T>(value: T) => {
  const prevValue = useRef<T>();

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return prevValue.current;
};
export default usePrev;
