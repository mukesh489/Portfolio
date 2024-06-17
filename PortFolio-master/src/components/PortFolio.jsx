import React from "react";
import javascript from "../../public/javascript.png"; // Add JavaScript logo
import html from "../../public/html.png"; // Add HTML logo
import css from "../../public/css.jpg"; // Add CSS logo
import reactjs from "../../public/reactjs.png"; // Add ReactJS logo

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: javascript,
      name: "MyNotebook",
      link: "https://github.com/mukesh489/Mynotebook.git",
    },
    {
      id: 2,
      logo: css,
      name: "Spotify Clone",
      link: "https://github.com/mukesh489/spotifyclone.git",
    },
    {
      id: 3,
      logo: html,
      name: "Razorpay Clone",
      link: "https://github.com/mukesh489/razorpay-clone.git",
    },
    {
      id: 4,
      logo: reactjs,
      name: "Instagram Clone",
      link: "https://github.com/mukesh489/instagram-clone-masterr.git",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, link }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
