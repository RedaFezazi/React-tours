import { useState } from "react";

const Card = ({ filterData, id, image, info, name, price }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article id={id} className="single-tour">
      <img className="img" src={image} alt={image} style={{ width: "100%" }} />
      <p className="tour-price">{price}</p>
      <header className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore
            ? info
            : info
                .split("")
                .slice(0, info.length / 2)
                .join("") + "..."}
        </p>
        <button className="info-btn" onClick={() => setReadMore(!readMore)}>
          Read more
        </button>
        <button className="delete-btn" onClick={() => filterData(id)}>
          Not Intressted
        </button>
      </header>
    </article>
  );
};
export default Card;
