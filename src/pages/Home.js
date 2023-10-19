import React from "react";
import laptop from "../img/Laptop.png";
const Home = () => {
  return (
    <>
      <div class="slider flex flex-col-reverse md:flex-row bg-[#f2f2f2] md:mx-16">
        <div class="left flex flex-col justify-center items-center md:items-baseline py-12 md:w-3/5">
          <h1 class="text-2xl font-medium md:text-4xl mx-5">Surface Laptop</h1>
          <p class="w-3/4 mx-5 text-center md:text-left">
            Do it all with a perfect balance of sleek ,ultra thin desgine
          </p>
          <button class="text-white bg-black px-4 py-2 my-6 font-bold mx-5">
            Shop Now
          </button>
        </div>
        <div class="right flex justify-center md:w-2/5 md:justify-center h-[50vh]">
          <img class="w-[20rem] md:w-[20rem] my-6" src={laptop} alt="laptop" />
        </div>
      </div>
    </>
  );
};

export default Home;
