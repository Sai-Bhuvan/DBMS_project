import React from "react";

function Showplaces() {
  state = {
    name: "",
    discription: "",
    places: [],
  };

  displayplaces = (places) => {
    if (!places.length) return null;

    return places.map((place, index) => (
      <div key={index}>
        <div>
          <img src={place.image} alt="sorry" />
        </div>
        <div>
          <h1>{place.name}</h1>
          <p>{place.discription}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="">Traveligo</div>
      <div className="placelist">{this.displayplaces(this.state.places)}</div>
    </div>
  );
}

export default Showplaces;
