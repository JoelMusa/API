import React from "react";

export default function Header() {
  return (
    <div className="flex shadow-sm shadow-black m-3 ">
      <div className="flex mx-auto gap-4 py-2 align-middle ">
        {menuItems.map((item, index) => (
          <a className="hover:text-purple-400" key={index} href={`/${item}`}>
            {item}
          </a>
        ))}
        <input
          type="text"
          placeholder="Search products..."
          className="border-black border-x border-y rounded-xl px-2"
        />
        <button className="border-black border-x border-y rounded-xl px-2 hover:text-purple-400">
          Search
        </button>
      </div>
    </div>
  );
}

const menuItems = ["phones", "tablets", "computers", "accessories"];
