import { useRef } from 'react';
import { v4 as uuid4 } from 'uuid';

export const useGenerateId = () => {
  const idRef = useRef<string | null>(null);

  if (idRef.current === null) {
    idRef.current = uuid4();
  }

  return idRef.current;
};
