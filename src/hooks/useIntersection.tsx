import { useCallback, useEffect, useRef, useState } from 'react';

type useIntersectionOptions = Partial<{
  threshold: number[];
  isBottomToTop: boolean;
  onIntersection: () => void;
}>;

export const useIntersection = ({
  threshold = [],
  isBottomToTop = false,
  onIntersection = () => {},
}: useIntersectionOptions) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isBottomToTop) {
          //Intersection from bottom to top
          if (entry.boundingClientRect.top > 0 && entry.isIntersecting) {
            setIsIntersecting(true);
            onIntersection();
          } else if (
            entry.boundingClientRect.top > 0 &&
            !entry.isIntersecting
          ) {
            setIsIntersecting(false);
          }
        } else {
          onIntersection();
          setIsIntersecting(entry.isIntersecting);
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, isBottomToTop, onIntersection]);

  return { ref, isIntersecting, onIntersection };
};
