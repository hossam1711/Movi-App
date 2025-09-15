import React from "react";

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="movies-container">
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
          font-family: 'Arial', sans-serif;
          background: #0a0a0a;
        }

        .movies-container {
          padding: 0;
          min-height: 100vh;
          width: 100%;
          box-sizing: border-box;
          background: linear-gradient(45deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          position: relative;
        }

        .movies-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, #ff6b6b20 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #4ecdc420 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, #ffd93d10 50%, transparent 70%);
          animation: backgroundMove 20s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes backgroundMove {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .movies-container {
            padding: 0;
          }
        }
      `}</style>
      {children}
    </div>
  );
};

export default BackgroundWrapper;