import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";
import Search from "./Search";
import Gallary from "./Gallary";
import Footer from "./Footer";
// import Search_loc from "./search_loc";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      {/* <Search_loc /> */}
      <Search />
      <Gallary />
      <Footer />
    </div>
  );
}

export default App;
