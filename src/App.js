import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const PRODUCTOS = [
  { id: '1', nombre: 'Laptop Pro', precio: '$1200', descripcion: 'Ideal para desarrolladores.' },
  { id: '2', nombre: 'Monitor 4K', precio: '$400', descripcion: 'Pantalla de alta resolución.' },
  { id: '3', nombre: 'Teclado Mecánico', precio: '$100', descripcion: 'Switches para escritura rápida.' }
];

function ListaProductos() {
  return (
    <div className="page">
      <h1>Nuestros Productos</h1>
      <ul>
        {PRODUCTOS.map(prod => (
          <li key={prod.id}> {/* [2] */}
            <Link to={`/producto/${prod.id}`}>{prod.nombre}</Link> {/* [3] */}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetalleProducto() {
  const { id } = useParams();
  const producto = PRODUCTOS.find(p => p.id === id);

  return (
    <div className="page">
      <h2>{producto?.nombre}</h2>
      <p><strong>Precio:</strong> {producto?.precio}</p>
      <p>{producto?.descripcion}</p>
      <Link to="/">Volver a la lista</Link>
    </div>
  );
}

export default function App() {
  return (
    <Router> {/* [3] */}
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
    </Router>
  );
}