"use client";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <Image
        width={140}
        height={30}
        src={"/assets/icons/Tahwil 2.svg"}
        alt="logo"
        className="animate-pulse"
      />
      <p className="text-2xl font-bold animated-text mt-2">
        It begins with you
      </p>
      <style>
        {`
          @keyframes pulseGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animated-text {
            background: linear-gradient(90deg, #ff0080, #ffcc00, #00ffcc);
            background-size: 300% 300%;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: pulseGradient 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
