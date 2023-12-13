import React, { useState } from "react";

function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "AddStartup", link: "/addstartup" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md  fixed top-0 z-10  w-full ">
      <div className="md:flex  items-center justify-between bg-slate-900 py-4 md:px-10 px-7">
        <div
          className="font-semibold font-sans text-2xl cursor-pointer flex items-center
    text-white"
        >
          Startup Directory
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon color="light" name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex  md:items-center md:pb-0 pb-7 absolute md:static   left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-15 z-10  text-white bg-gray-800 "
              : "top-[-490px]  text-white "
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className=" hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
