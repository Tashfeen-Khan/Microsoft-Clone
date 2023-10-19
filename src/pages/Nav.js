import React from "react";
// import'../css/style.css'
import logo from "../img/m-icon.png";
import { LiaSearchSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiShoppingCartThin, PiUserCircleLight } from "react-icons/pi";
const Nav = () => {
  return (
    <>
      <div class="navbar flex justify-between items-center md:px-12">
        <div class="flex justify-center items-center md:order-2">
          <div class="hamburger inline-block p-4 cursor-pointer md:hidden">
            <div class="line  h-0.5 w-6 my-1 bg-black"></div>
            <div class="line h-0.5 w-6 my-1 bg-black"></div>
            <div class="line h-0.5 w-6 my-1 bg-black"></div>
          </div>
          <div class="search md:hidden ">
            <LiaSearchSolid className="text-xl " />
          </div>
        </div>
        <div class="logo text-center md:order-1 flex ">
          <div class="p-4 flex justify-center w-36 md:justify-normal md:w-40 ">
            <img class="w-full" src={logo} alt="loggo" />
          </div>
          <div class="features absolute    md:static md:w-auto  inset-0 md:items-center md:flex md:mx-4 md:space-x-4 -translate-x-96 md:translate-x-0">
            <div class="fitem">Microsoft 360</div>
            <div class="fitem">Office</div>
            <div class="fitem">Windows </div>
            <div class="fitem">Support</div>
          </div>
        </div>

        <div class="cart md:order-3 flex mr-4 md:mr-4">
          <div className="mt-2 mr-2 hidden lg:block">
            <div className="flex justify-center items-center">
              <div>Microsoft</div>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
          </div>
          <div class="search hidden md:block">
            <LiaSearchSolid className="text-2xl mt-2 md:mr-2 " />
          </div>
          <div className="flex gap-2 ">
            <PiShoppingCartThin className="text-2xl mt-[0.5rem]  " />
            <PiUserCircleLight className="text-4xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
