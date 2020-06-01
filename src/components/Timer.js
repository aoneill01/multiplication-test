import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';

function Timer(props, ref) {
  const [startTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setElapsed(Math.floor((Date.now() - startTime) / 1000)),
      1000
    );
    return () => clearInterval(timerId);
  }, [startTime]);

  useImperativeHandle(ref, () => ({
    elapsed,
  }));

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  return (
    <p className="sticky timer">
      {minutes}:{('' + seconds).padStart(2, '0')}
    </p>
  );
}

export default forwardRef(Timer);
