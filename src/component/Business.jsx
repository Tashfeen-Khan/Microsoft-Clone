import React from "react";
import b1 from "../img/b1.webp";
import b2 from "../img/b2.webp";
import b3 from "../img/b3.webp";
import b4 from "../img/b4.avif";
// import b2 from "../img/banar-2.avif";

import { RiArrowDropDownLine } from "react-icons/ri";
const Business = () => {
  return (
    <>
      <div className="grid m-3  grid-cols-1 xs:grid-cols-2 space-y-6 xs:space-y-0 gap-6 xl:grid-cols-4 md:mx-16">
        <div>
          <div className="bg-gray-700">
            <img className="w-fit" src={b1} alt="g1" />
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
              <img className="  w-fit" src={b2} alt="g1" />
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
          <div>
            <img className=" w-fit" src={b3} alt="g1" />
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
            <img className=" w-fit" src={b4} alt="g1" />
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
    </>
  );
};

export default Business;
