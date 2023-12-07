import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    { link: "https://www.instagram.com/agungrifai10/", icon: "logo-instagram" },
    {
      link: "https://web.facebook.com/rifaithebluessejati.rifaithebluessejati",
      icon: "logo-facebook",
    },
    { link: "https://www.linkedin.com/in/agung-rifai", icon: "logo-linkedin" },
    { link: "https://gitlab.com/agungfay10", icon: "logo-gitlab" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div
        data-aos="fade-right"
        className="flex-1 flex items-center justify-center h-full"
      >
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div data-aos="fade-down" className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Agung Rifai</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Web Developer
          </h4>
          <a href="#contact">
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-cyan-500 mt-8">
              Contact Me
            </button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((social_info, i) => (
              <div
                key={i}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={social_info.link}>
                  <ion-icon name={social_info.icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
