import React from "react";

export default function ItemCounter(props) {
  const { cantidad, setCantidad, stock } = props;

  const handleIncrement = () => {
    setCantidad(cantidad + 1);
  };
  const handleDecrement = () => {
    setCantidad(cantidad - 1);
  };

  return (
    <>
      {cantidad > 0 ? (
        <button onClick={handleDecrement}>-</button>
      ) : (
        <button onClick={handleDecrement} disabled>
          -
        </button>
      )}
      {cantidad}
      {cantidad < stock ? (
        <button onClick={handleIncrement}>+</button>
      ) : (
        <button onClick={handleIncrement} disabled>
          +
        </button>
      )}
    </>
  );
}
