import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  // console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tourObj) => {
          return <Tour key={tourObj.id} {...tourObj} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
