import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      if (blobRef.current) {
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 150, fill: "forwards", easing: "ease-out" },
        );
      }
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, []);

  return (
    <div
      ref={blobRef}
      className="pointer-events-none fixed z-[9999] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-accent/10 shadow-[0_0_20px_rgba(198,217,45,0.2)] backdrop-blur-md"
      style={{
        left: "-100px",
        top: "-100px",
      }}
    >
      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
    </div>
  );
};

export default CursorGlow;
