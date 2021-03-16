import * as React from 'react';
import { useEffect, useState } from 'react';
import { Redirect, RedirectProps } from 'react-router';

interface DelayProps {
  delay: number;
}

const DelayRedirect = ({ delay, ...rest }: RedirectProps & DelayProps) => {
  const [timeToRedirect, setTimeToRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeToRedirect(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return timeToRedirect ? <Redirect {...rest} /> : null;
};

export default DelayRedirect;