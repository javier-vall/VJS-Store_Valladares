import React, { useState } from "react";
import ItemCounter from "./ItemCounter";

export default function Producto({ producto }) {
  const { id, nombre, precio, stock } = producto;

  const [cantidad, setCantidad] = useState(0);

  return (
    <tr key={id}>
      <td>{nombre}</td>
      <td>{stock}</td>
      <td>
        <ItemCounter
          cantidad={cantidad}
          setCantidad={setCantidad}
          stock={stock}
        />
      </td>
      <td>{precio.toFixed(2)}</td>
      <td>
        {cantidad <= 0
          ? "Ingrese Cantidad"
          : (precio * cantidad).toFixed(2) + "$"}
      </td>
      {cantidad >= stock ? (
        <td style={{ color: "red" }}>Stock Maximo Alcanzado</td>
      ) : null}
    </tr>
  );
}
