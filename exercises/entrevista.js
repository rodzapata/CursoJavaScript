import { useEffect, useState } from "react";
import axios from "axios";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const cargarUsuario = async () => {

      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users", { signal: controller.signal });
        setUsuarios(response.data);

      } catch (error) {
        if (axios.isCancel(error) || error.name === "CancelError") {
          console.log("peticion cancelada");

        } else {
          setError(error.message);
        }

      }
    };

    cargarUsuario();

    return () => {
      controller.abort()
    };


  }, []);

  if (error) return (<p>Error : {error}</p>)

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;


