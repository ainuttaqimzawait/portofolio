import React from "react";

const Skill = ({ name, image }) => {
  return (
    <div data-aos="fade-up" className="text-white bg-gray-600 p-4 rounded-lg shadow-md mb-4 mt-4 flex items-center">
      <img src={image} alt={`${name} logo`} className="w-8 h-8 mr-4" />
      {name}
    </div>
  );
};

export default Skill;
