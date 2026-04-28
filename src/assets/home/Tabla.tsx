import { useEffect, useState } from "react";

const Tabla = () => {
  const [datos, setDatos] = useState([
  { id: 1, nombre: "Prueba", precio: 100 }
]);

  useEffect(() => {
    fetch("https://andersones78x0.alwaysdata.net/products.php")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDatos(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Base de Datos</h2>

      {datos.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              {Object.keys(datos[0]).map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {datos.map((fila, i) => (
              <tr key={i}>
                {Object.values(fila).map((val, j) => (
                  <td key={j}>{String(val)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos...</p>
      )}
    </div>
  );
};

export default Tabla;