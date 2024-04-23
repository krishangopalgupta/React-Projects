const Square = ({ value, onSquareClick }) => {
  return (
    <div>
      <button className="btn" onClick={onSquareClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;


