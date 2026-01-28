import { useEffect, useRef, useState } from "react";
import { Drawer } from "antd";
import NavigationUnOrderList from "../Navbar/NavItems/NavBarUnOrderList";

const SwipeDrawer = ({ width = 320, maxWidth = 1000 }) => {
  const mockValue = true;
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

  const startX = useRef(0);
  const currentX = useRef(0);

  // Handle resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= maxWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  // Swipe gesture
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      currentX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const diff = currentX.current - startX.current;

      // Swipe right → open drawer
      if (diff > 50 && !open) {
        setOpen(true);
      }

      // Swipe left → close drawer
      if (diff < -50 && open) {
        setOpen(false);
      }

      startX.current = 0;
      currentX.current = 0;
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, open]);

  return (
    <>
      {!isMobile && <div style={{ width }}>{/* Desktop sidebar */}</div>}

      {isMobile && (
        <Drawer
          placement="left"
          open={mockValue}
          onClose={() => setOpen(false)}
          size={width}
          closable={false}
          className="DrawerNavigationList"
        >
          <NavigationUnOrderList
            onItemClick={() => setOpen(false)}
            enableActive
          />
        </Drawer>
      )}
    </>
  );
};

export default SwipeDrawer;
