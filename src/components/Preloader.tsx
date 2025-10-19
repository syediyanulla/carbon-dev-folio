import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-800 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-4">
        <h1 className="text-7xl md:text-9xl font-bold text-mint">HELLO</h1>
        <p className="text-5xl md:text-7xl text-mint">:)</p>
      </div>
    </div>
  );
};

export default Preloader;
