import React, { useState } from "react";
import Release from "./components/release/release";
import NavBar from "./components/navBar/navBar";
import Carousel from "./components/carousel/carousel";
import { data } from "./components/data";

const App = () => {
  let [active, setActive] = useState({
    img : data[6].image,
    movieName : data[6].movieName,
    description : data[6].description
  });

  let getView = (getId) => {
    for(let i = 0 ; i<data.length ; i++){
      if(data[i].id === getId){
        setActive({
          img : data[i].image,
          movieName : data[i].movieName,
          description : data[i].description
        });
      }
    }
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-[83.75rem] h-[63.0625rem] bg-[#192026] px-20 pt-4 gap-7">
        <NavBar />
        <h1 className="poppins font-semibold text-[32px] text-white">
          Explore
        </h1>
        <span className="poppins text-[22px] text-[#868686]">
          What are you gonna watch today?
        </span>
        {<Carousel
          img={active.img}
          movieName={active.movieName}
          description={active.description}
        />}
        <div className="flex flex-col gap-7 ">
          <h1 className="poppins font-semibold text-[32px] text-white">
            New Release
          </h1>
          <div className="gap-[1.8750rem] flex ">
            {data.map((information) => {
               return (
                <Release
                  activeView={getView}
                  key={information.id}
                  id={information.id}
                  movieName={information.movieName}
                  episode={information.episode}
                  img={information.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
