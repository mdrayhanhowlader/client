import React from "react";
import Card from "./Card/Card";
import HeaderSearch from "./HeaderSearch";
import MultiRangeSlider from "./Range/multiRangeSlider/MultiRangeSlider";

const Main = () => {
  return (
    <div>
      {/* <img src="" alt="" />
      <MultiRangeSlider
        min={1000}
        max={30000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      ></MultiRangeSlider> */}

      <div>
        <HeaderSearch></HeaderSearch>
        <div className="w-4/5 md:w-1/5 mx-auto mt-16">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Main;
