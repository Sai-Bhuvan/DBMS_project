import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderdata = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyVA2tZkP6DwGH5CTIV2CwzrAv3FSaNpaSGDHVrKn&s",
  },
  {
    url: "data:image/jpeg;base64,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",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVss4_GEUKUdKsYnChqQDPn3sqDdzu5bhAg&usqp=CAU",
  },
];

function ShowVehicle() {
  const [slide, setslide] = useState(0);
  const length = sliderdata.length;
  const name = "anirudh's Nexon";
  const price = 30;
  const seats = 8;

  const previmg = () => {
    setslide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextimg = () => {
    setslide(slide === 0 ? length - 1 : slide - 1);
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
            <button className="button m-5">Add new Vehicle</button>
          </div>
          <div className="bg-slate-100 rounded-lg m-5 grid grid-flow-col gap-3 shadow-lg max-w-screen-xl mx-auto">
            <div className="  px-4 py-16 relative grid grid-flow-row">
              <div className=" grid grid-flow-col ">
                <h1 className=" font-bold ">{name}</h1>
                <div className=" items-center justify-center">
                  <h1 className="font-bold text-pink-400">Rs {price} per Km</h1>
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
              <div className=" m-3">{discription}</div>
              <div className="font-bold m-3 grid grid-flow-col">
                <div> No of seats: </div>
                <div>{seats}</div>
              </div>
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

export default ShowVehicle;
