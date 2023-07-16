import React from "react";

function Addpackage() {
  return (
    <div className="bg-slate-100 ">
      <div className="cols-span-3 m-4 ">
        <div className=" text-blue-400 text-3xl m-5 font-bold   my-6 justify-center">
          Traveligo
        </div>
        <div className="  rounded-2xl shadow-2xl justify-center flex flex-col w-full   items-center  transition duration-1000 ease-in">
          <h2 className="p-3 text-3xl font-bold text-blue-400">Add Package</h2>

          <h3 className="text-xl font-semibold text-blue-400 pt-2">
            Enter the details of new Package
          </h3>

          {/* Inputs */}
          <div className="flex flex-col items-center justify-center mt-2">
            <input
              type="text"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="Name of package"
            ></input>
            <input
              type="text"
              placeholder="add the places"
              className="rounded-md p-2 border  border-cyan-700 m-2"
            />
            <input
              type="email"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="enter Email"
            ></input>
            <input
              type="text"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="brief discription"
            ></input>
            <input
              type="number"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="enter mobile number"
            ></input>
            <input
              type="number"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="enter price"
            />
            <input
              type="number"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="number of days"
            />
            <input
              type="date"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="start date"
            />
            <input
              type="url"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="add url for the image"
            />
            <button className="button m-2">Add Place</button>
          </div>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        </div>
      </div>
    </div>
  );
}

export default Addpackage;
