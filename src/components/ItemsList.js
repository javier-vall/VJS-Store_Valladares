import React from "react";
import Producto from "./Producto";
import { useState } from "react";
export default function ItemsList() {
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Barra Olimpica 20 kg", precio: 100.5, stock: 10 },
    { id: 1, nombre: "Banco Inclinable", precio: 150, stock: 3 },
    { id: 1, nombre: "Pesa Rusa 16 kg", precio: 80, stock: 5 },
    { id: 1, nombre: "Jaula Power Rack", precio: 500, stock: 2 },
    { id: 1, nombre: "Disco Olimpico 20kg", precio: 100, stock: 10 },
  ]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Stock</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </tbody>
      </table>
    </>
  );
}
