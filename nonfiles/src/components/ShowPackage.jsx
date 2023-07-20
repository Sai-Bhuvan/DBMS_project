import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderdata = [{}, {}, {}];
const placeslider = ["hello ", "bye", "good morning"];

function ShowPackage() {
  const [slide, setslide] = useState(0);
  const [place, setplace] = useState(0);
  const length = sliderdata.length;
  const placelength = placeslider.length;
  const name = "anirudh's trip";
  const price = 30000;

  const previmg = () => {
    setslide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextimg = () => {
    setslide(slide === 0 ? length - 1 : slide - 1);
  };
  const prevplace = () => {
    setplace(place === 0 ? placelength - 1 : place - 1);
  };
  const nextplace = () => {
    setplace(place === placelength - 1 ? 0 : place + 1);
  };
  const discription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis quaerat odit, facilis quis voluptatem rem ipsam cumque doloremque laboriosam dicta consequuntur totam quo dolor unde! Expedita soluta porro distinctio!";

  return (
    <div className="items-center justify-center">
      <div className=" grid grid-cols-2 bg-slate-100">
        <div className="cols-span-3 m-4 ">
          <div className="grid grid-flow-col  sticky top-0 m-5">
            <div className=" text-pink-400 text-3xl m-5 font-bold   my-6 justify-center">
              Traveligo
            </div>
            <button className="button m-5">Add new Package</button>
          </div>
          <div className="bg-slate-100 rounded-lg m-5 grid grid-flow-col gap-3 shadow-lg max-w-screen-xl mx-auto">
            <div className="  px-4 py-16 relative grid grid-flow-row">
              <div className=" grid grid-flow-col ">
                <h1 className=" font-bold ">{name}</h1>
                <div className=" items-center justify-center">
                  <h1 className="font-bold text-pink-400">
                    Rs {price} per person
                  </h1>
                </div>
              </div>
              {sliderdata.map((item, index) => (
                <div className={index === slide ? "opacity-100" : "opacity-0"}>
                  <BsArrowLeftSquareFill
                    onClick={previmg}
                    className="absalute top-[50%] text-2xl  text-black  cursor-pointer"
                  />
                  {index === slide && (
                    <img
                      className="w-full rounded-md "
                      src={item.url}
                      alt="sorry"
                    />
                  )}
                  <BsArrowRightSquareFill
                    onClick={nextimg}
                    className="absalute  top-[50%] text-2xl text-black cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className=" m-1">{discription}</div>
              {placeslider.map((item, index) => (
                <div className={index === place ? "opacity-100" : "opacity-0"}>
                  <BsArrowLeftSquareFill
                    onClick={prevplace}
                    className="absalute top-[50%] text-2xl  text-black  cursor-pointer"
                  />
                  {index === place && (
                    <div className="w-full rounded-md">{item}</div>
                  )}
                  <BsArrowRightSquareFill
                    onClick={nextplace}
                    className="absalute  top-[50%] text-2xl text-black cursor-pointer"
                  />
                </div>
              ))}
              <div className="font-bold m-3 "></div>
              <div>
                <button className="button m-3">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPackage;
