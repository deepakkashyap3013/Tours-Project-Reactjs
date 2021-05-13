import React, { useState } from "react";

const Tour = (props) => {
  const [readMore, setreadMore] = useState(false);

  const { id, name, image, info, price, removeTour } = props;
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.slice(0, 200)}...`}
          <button onClick={() => setreadMore(!readMore)}>
            {readMore ? "show less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
