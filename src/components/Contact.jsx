import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "agungrifai.jobs@gmail.com" },
    { logo: "logo-whatsapp", text: "085603494379" },
    {
      logo: "location",
      text: "Jakarta, Indonesia",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>

        <div
          className="mt-10 flex md:flex-row flex-col
         gap-6 max-w-7xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <div data-aos="fade-right" className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
