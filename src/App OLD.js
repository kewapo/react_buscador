import React, { useState, useEffect } from 'react';

function App() {
  // 1. Definir el estado en el nivel superior del componente [1, 2]
  const [busqueda, setBusqueda] = useState('react'); 
  const [resultados, setResultados] = useState([]);

  // 2. Efecto para buscar datos cuando cambie el término [3, 4]
  useEffect(() => {
    const url = `https://hn.algolia.com/api/v1/search?query=${busqueda}&hitsPerPage=100`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setResultados(data.hits))
      .catch(error => console.error("Error al buscar:", error));
  }, [busqueda]); // El array de dependencias activa el efecto al cambiar 'busqueda' [3]

  return (
    <div className="page">
      <h1>Buscador Hacker News</h1>
      {/* Componente controlado: el valor depende del estado [5, 6] */}
      <input
        type="text"
        value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)} // Actualiza el estado al escribir [7]
      />
      
      <ul className="notes">
        {resultados.map(item => (
          <li key={item.objectID}> {/* La 'key' ayuda a React a identificar elementos [8] */}
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;