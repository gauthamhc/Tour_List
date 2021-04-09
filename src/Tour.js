import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <p className="tour-price">${price}</p>
        </div>
        <p className="tour-info">{readMore ? info : info.substring(0, 200)}</p>
        <button className="btn" onClick={() => setReadMore(!readMore)}>
          {" "}
          {readMore ? "show-less" : "ReadMore"}
        </button>
        <button onClick={() => removeTour(id)} className="delete-btn">
          Not Intrested
        </button>
      </footer>
    </div>
  );
};
export default Tour;
