import React, { useState } from "react";

function Addpackage() {
  const [packagename, setpackageName] = useState("");

  const [addPhotos, setAddPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [days, setdays] = useState("0");
  const [price, setPrice] = useState("0");
  const [link, setLink] = useState("");
  const [places, setplaces] = useState([]);
  const [place, setplace] = useState("");

  async function addPhotoByLink(event) {
    event.preventDefault();

    setAddPhotos((prev) => [...prev, link]);
    // console.log(addPhotos);
    setLink("");
  }

  async function addplace() {
    setplaces((prevPlaces) => [...prevPlaces, place]);
    setplace("");
    // setplaces("");
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
                Add Package
              </h2>

              <h3 className="text-xl font-semibold text-blue-400 pt-2">
                Enter the details of new Package
              </h3>

              {/* Inputs */}
              <div className="flex flex-col items-center justify-center mt-2">
                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center">Name of Package:</h3>
                  <input
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="Name of package"
                    value={packagename}
                    onChange={(event) => setpackageName(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    enter no of days:
                  </h3>
                  <input
                    type="number"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="enter no of seats"
                    max={100}
                    min={0}
                    value={days}
                    onChange={(event) => setdays(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    Description about the package:
                  </h3>
                  <textarea
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="brief description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    Enter price per Person:
                  </h3>
                  <input
                    type="number"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="enter price"
                    value={price}
                    min={0}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>

                <div className="grid grid-cols-3 gap-5 m-3">
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

                <div className="grid grid-cols-3 gap-5 m-3">
                  <h3 className="text-2xl justify-center ml-8">Add Places:</h3>
                  <textarea
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="add places of the package"
                    value={place}
                    onChange={(event) => setplace(event.target.value)}
                  />
                  <button onClick={addplace}>Add Place</button>
                </div>

                <button className="button m-3">Add Package</button>
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

export default Addpackage;
