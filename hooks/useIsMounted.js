import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useIsMounted = () => {
  const router = useRouter();
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      setloaded(true);
    }
  }, [router.isReady]);

  return {
    loaded,
  };
};
