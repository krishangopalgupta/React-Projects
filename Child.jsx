import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import "../App.css";

const Child = ({ noOfStar = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => setRating(index);
  const handleMouseMove = (index) => setHover(index);
  const handleMouseLeave = () => setHover(rating);

  return (
    <div>
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <>
            <FaStarOfLife
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={() => handleMouseLeave()}
            />
          </>
        );
      })}
    </div>
  );
};

export default Child;
