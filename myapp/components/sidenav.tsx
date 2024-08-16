import React from "react";
import "../app/globals.css";
export default function Sidenav() {
  return (
    <div className="shadow-sm block shadow-black m-3 max-w-md h-screen">
      <h3 className="text-4xl  text-center py-3">Properties</h3>
      <h2 className="text-2xl px-2 py-3">Colors</h2>
      <div className="px-5 py-2 flex flex-col gap-2 mx-auto ">
        {colors.map((color, index) => (
          <div key={index}>
            <input type="checkbox" />
            <label className="rounded-md p-2 text-black">{color}</label>
          </div>
        ))}
      </div>
      <h2 className="text-2xl px-2 py-3">Screen size</h2>
      <div className="px-5 py-2 flex flex-col gap-2 mx-auto ">
        {screenSizes.map((color, index) => (
          <div key={index}>
            <input type="checkbox" />
            <label className="rounded-md p-2 text-black">{color}</label>
          </div>
        ))}
      </div>
      <h2 className="text-2xl px-2 py-3">Screen size</h2>
      <div className="px-5 py-2 flex flex-col gap-2 mx-auto ">
        {screenSizes.map((color, index) => (
          <div key={index}>
            <input type="checkbox" />
            <label className="rounded-md p-2 text-black">{color}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

const colors = ["red", "blue", "green", "yellow", "purple", "black", "white"];
const screenSizes = ["sm", "md", "lg", "xl"];
