import React from "react";
import g1 from "../img/g1-img.jpeg";
import g2 from "../img/g2-img.jpeg";
import g3 from "../img/g3-img.webp";
import g4 from "../img/g4-img.webp";
import b2 from "../img/banar-2.avif";
// import { Link } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
const Promo = () => {
  return (
    <>
      <div className="grid m-3  grid-cols-1 xs:grid-cols-2 space-y-6 xs:space-y-0 gap-6 xl:grid-cols-4 md:mx-16">
        <div>
          <div className="bg-gray-700">
            <img className="w-full" src={g1} alt="g1" />
          </div>

          <div className="mt-2 space-y-2  ">
            <h1 className="font-semibold text-2xl">
              Get Microsoft Teams for free
            </h1>
            <p>
              Online meetings, chat and shared cloud storage – all in one place.
            </p>
            <a
              className="font-bold text-blue-600 flex items-center text-lg "
              href="/about"
            >
              Sign up for free{" "}
              <spam>
                <RiArrowDropDownLine className="text-3xl mt-1" />
              </spam>
            </a>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img className="  w-full " src={g2} alt="g1" />
            </div>
          </div>

          <div className="mt-2 space-y-2">
            <h1 className="font-semibold text-2xl">
              Try Microsoft 365 for free
            </h1>
            <p>
              Get Microsoft Teams, secure cloud storage and premium apps across
              devices with a free one-month Microsoft 365 Business Standard
              trial.
            </p>
            <a
              className="font-bold text-blue-600 flex items-center text-lg "
              href="/about"
            >
              Start your free trial{" "}
              <spam>
                <RiArrowDropDownLine className="text-3xl mt-1" />
              </spam>
            </a>
          </div>
        </div>
        <div>
          <div className="bg-slate-500">
            <img className=" w-full" src={g3} alt="g1" />
          </div>
          <div className="mt-2 space-y-2">
            <h1 className="font-semibold text-2xl">
              Welcome to your Windows 365 Cloud PC
            </h1>
            <p>
              Securely stream your Windows experience from the Microsoft cloud
              to any device.
            </p>
            <a
              className="font-bold text-blue-600 flex items-center text-lg "
              href="/about"
            >
              Get it to day{" "}
              <spam>
                <RiArrowDropDownLine className="text-3xl mt-1" />
              </spam>
            </a>
          </div>
        </div>
        <div>
          <div>
            <img className=" w-full" src={g4} alt="g1" />
          </div>
          <div className="mt-2 space-y-2">
            <h1 className="font-semibold text-2xl">Visual Studio 2022</h1>
            <p>
              Get the most comprehensive IDE for .NET and C++ developers on
              Windows for building web, cloud, desktop, mobile apps, services
              and games.
            </p>
            <a
              className="font-bold text-blue-600 flex items-center text-lg "
              href="/about"
            >
              Download Visual Studio 2022{" "}
              <spam>
                <RiArrowDropDownLine className="text-3xl mt-1" />
              </spam>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="grid m-3  grid-cols-1 xs:grid-cols-2 space-y-6 xs:space-y-0 gap-6 xl:grid-cols-4 md:mx-16">
        <div>
          <div className="bg-gray-700">
            <img className=" w-fit" src={g1} alt="g1" />
          </div>

          <div className="mt-2 space-y-2  ">
            <h1 className="font-semibold text-2xl">
              Designed for life today – and tomorrow
            </h1>
            <p>
              The next-generation of games. Your goals. Friends and family.
              Windows 11 was made to bring you closer to everything you love.
            </p>
            <a
              className="font-bold text-blue-600 flex items-center text-lg "
              href="/about"
            >
              See if your pc is ready{" "}
              <spam>
                <RiArrowDropDownLine className="text-3xl mt-1" />
              </spam>
            </a>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img className="h-48  w-full" src={g2} alt="g1" />
            </div>
          </div>

          <div className="mt-2 space-y-2">
            <h1 className="font-semibold text-2xl">Microsoft Edge</h1>
            <p>
              World-class performance with more privacy, more productivity and
              more value while you browse.
            </p>
            <a
              className="font-bold text-blue-600 flex items-center text-lg "
              href="/about"
            >
              Download Now{" "}
              <spam>
                <RiArrowDropDownLine className="text-3xl mt-1" />
              </spam>
            </a>
          </div>
        </div>
        <div>
          <div>
            <img className="h-48 lg:h-1/2 w-full" src={g3} alt="g1" />
          </div>
          <div className="mt-2 space-y-2">
            <h1 className="font-semibold text-2xl">Microsoft OneDrive</h1>
            <p>
              Save your files and photos to OneDrive and access them from any
              device, anywhere.
            </p>
            <a
              className="font-bold text-blue-600 flex items-center text-lg "
              href="/about"
            >
              Learn More{" "}
              <spam>
                <RiArrowDropDownLine className="text-3xl mt-1" />
              </spam>
            </a>
          </div>
        </div>
        <div>
          <div>
            <img className="h-48 lg:h-1/2 w-full" src={g4} alt="g1" />
          </div>
          <div className="mt-2 space-y-2">
            <h1 className="font-semibold text-2xl">OneNote</h1>
            <p>Organise your notes and your life.</p>
            <a
              className="font-bold text-blue-600 flex items-center text-lg "
              href="/about"
            >
              Learn More{" "}
              <spam>
                <RiArrowDropDownLine className="text-3xl mt-1" />
              </spam>
            </a>
          </div>
        </div>
      </div> */}
      <div className="banner-2 bg-[#E6E6E6] mx-2 md:mx-16 md:flex md:flex-row-reverse mt-24">
        <div className=" md:w-1/2 ">
          <img src={b2} alt="bb" className="w-fit " />
        </div>
        <div className="  w-1/2 hidden md:block  ">
          <div className="    flex flex-col  h-full justify-center md:pl-10 lg:pl-16 space-y-3">
            <h1 className="font-bold text-2xl">Outlook for iOS and Android</h1>
            <p>Connect. Organise. Get things done</p>
            <button className="bg-[#0067B8] py-3 px-3 w-40 h-12 font-bold text-white hover:bg-[#005CA5]">
              Download now
            </button>
          </div>
        </div>
      </div>
      <div className=" py-12 pl-3 space-y-2 block md:hidden  ">
        <h1 className="font-bold text-2xl">Outlook for iOS and Android</h1>
        <p>Connect. Organise. Get things done</p>
        <button className="bg-[#0067B8] py-2 px-3 font-bold text-white hover:bg-[#005CA5]">
          Download now
        </button>
      </div>
    </>
  );
};

export default Promo;
