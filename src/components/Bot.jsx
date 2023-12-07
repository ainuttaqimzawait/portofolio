import React from "react";

const Bot = () => {
  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <a href="https://api.whatsapp.com/send?phone=6285603494379" className="flex items-center justify-center h-full w-full">
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </a>
    </div>
  );
};

export default Bot;
