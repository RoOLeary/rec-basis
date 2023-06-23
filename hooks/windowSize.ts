import { useState, useEffect} from 'react';

export function windowSize() {
    const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

    useEffect(() => {

        function handleResize() {
          setWindowSize(window.innerWidth);
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      return windowSize;
 }

export function isMobile(brk?: Number) {
  const size = windowSize()!;
  const breakpoint = brk ? brk : 768;
  if(size >= breakpoint){
    return false;
  } else {
    return true
  }
}

export function GetItemDisplayOnWindowSize(display?: string) {
  const window = windowSize()
  const defaultDisplayType: Boolean = true
  const mobileDisplayMap: Record<string, boolean> = {
    'mobile': true,
    'desktop': false,
  }
  const desktopDisplayMap: Record<string, boolean> = {
    'mobile': false,
    'desktop': true,
  }
  if (!display) {
    return defaultDisplayType;
  } else {
    if (window! < 768 ){
      return mobileDisplayMap[display]
    } else {
      return desktopDisplayMap[display]
    }
  }
}
