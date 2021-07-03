import React from "react";
import ItemsList from "./ItemsList";

function ItemListContainer({ subtitle }) {
  return (
    <div className="list-container">
      <h2>{subtitle}</h2>
      <ItemsList />
    </div>
  );
}

export default ItemListContainer;
