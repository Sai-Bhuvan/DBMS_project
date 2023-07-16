import React, { useState } from "react";

function Addvehicle() {
  const [vehiclename, setvehicleName] = useState("");
  const [name, Setname] = useState("");
  const [addPhotos, setAddPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [seat, setseats] = useState("0");
  const [price, setPrice] = useState("0");
  const [link, setLink] = useState("");
  const [vehicletype, setvehicletype] = useState("");

  async function addPhotoByLink(event) {
    event.preventDefault();

    setAddPhotos((prev) => [...prev, link]);
    console.log(addPhotos);
    setLink("");
  }

  return (
    <div className=" grid grid-cols-2 bg-slate-100">
      <div className="cols-span-3 p-4 mx-auto items-center">
        <form className="bg-slate-100 px-4">
          <div className="cols-span-3 m-4 ">
            <div className=" text-pink-400 text-3xl m-5 font-bold   my-6 justify-center">
              Traveligo
            </div>
            <div className="  rounded-2xl shadow-2xl justify-center flex flex-col w-full   items-center  transition duration-1000 ease-in">
              <h2 className="p-3 text-3xl font-bold text-blue-400">
                Add Vehicle
              </h2>

              <h3 className="text-xl font-semibold text-blue-400 pt-2">
                Enter the details of new Vehicle
              </h3>

              {/* Inputs */}
              <div className="flex flex-col items-center justify-center mt-2">
                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    enter your Name:
                  </h3>
                  <input
                    type="number"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="enter your name"
                    value={name}
                    onChange={(event) => Setname(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center">Name of Vehicle:</h3>
                  <input
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="Name of vehicle"
                    value={vehiclename}
                    onChange={(event) => setvehicleName(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h1 className="text-2xl justify-center m-3">
                    Select Type of your Vehicle
                  </h1>
                  <select
                    name=""
                    id=""
                    className="border  rounded-md p-2  border-cyan-700 m-1 text-blue-400"
                    value={vehicletype}
                    onChange={(event) => setvehicletype(event.target.value)}
                  >
                    <option className="text-blue-400">Bike</option>
                    <option className="text-blue-400">Car</option>
                    <option className="text-blue-400">Tempo</option>
                  </select>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    enter no of seats:
                  </h3>
                  <input
                    type="number"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="enter no of seats"
                    max={100}
                    min={1}
                    value={seat}
                    onChange={(event) => setseats(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    Description about condition of vehicle:
                  </h3>
                  <textarea
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="Brief description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    Enter price per KM:
                  </h3>
                  <input
                    type="number"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="enter price"
                    value={price}
                    min={1}
                    max={50}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-5 m-3">
                  <h3 className="text-2xl justify-center ml-8">Add Photos:</h3>
                  <input
                    type="url"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="add url image of vehicle"
                    value={link}
                    onChange={(event) => setLink(event.target.value)}
                  />
                  <button onClick={addPhotoByLink}>Add photo</button>
                </div>

                <button className="button m-2">Add Vehicle</button>
              </div>
              <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 mt-14">
        {addPhotos.length > 0 &&
          addPhotos.map((photo) => (
            <img src={photo} className="w-72 h-48 rounded-lg my-4" />
          ))}
      </div>
    </div>
  );
}

export default Addvehicle;
