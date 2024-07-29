import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // Adjust the time (3000ms = 3 seconds) as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } items-center justify-center h-screen bg-[#2b293d] transition 2s ease-out`}
    >
      <h1 className="animate-fade-in text-[#FFE047] font-secondary splash-animate text-sm">EventPlanner360</h1>
    </div>
  );
};

export default SplashScreen;
