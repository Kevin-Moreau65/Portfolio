import type { WritableAtom } from "nanostores";

const showElementOnScroll = (
  isVisible: WritableAtom<boolean>,
  div: Element,
  threshold: number
) => {
  const addAnimation = (entries: IntersectionObserverEntry[]) => {
    if (!isVisible.get())
      for (const entry of entries) {
        const bcr = entry.boundingClientRect;
        const isBottomVisible = bcr.bottom < window.innerHeight;
        if (entry.intersectionRatio <= threshold && isBottomVisible) {
          isVisible.set(true);
          observer.unobserve(div);
        }
      }
  };
  const observer = new IntersectionObserver(addAnimation, {
    threshold,
  });
  observer.observe(div);
};

export default showElementOnScroll;
