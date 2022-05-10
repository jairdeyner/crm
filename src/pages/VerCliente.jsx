import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(`http://localhost:3004/clientes/${id}`);

        const response = await request.json();

        setCliente(response);
      } catch (error) {
        console.error(error);
      }

      setCargando(false);
    })();
  }, []);

  return (
    <div>
      {cargando ? (
        <Spinner />
      ) : Object.keys(cliente).length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">
            Ver CLiente: {cliente.nombre}
          </h1>
          <p className="mt-3">Información del cliente</p>

          <p className="text-4xl text-gray-600 mt-10">
            <span className="text-gray-800 uppercase font-bold">Cliente: </span>
            {cliente.nombre}
          </p>

          <p className="text-2xl text-gray-700 mt-4">
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {cliente.email}
          </p>

          {cliente.telefono && (
            <p className="text-2xl text-gray-700 mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Teléfono:{" "}
              </span>
              {cliente.telefono}
            </p>
          )}

          <p className="text-2xl text-gray-700 mt-4">
            <span className="text-gray-800 uppercase font-bold">Empresa: </span>
            {cliente.empresa}
          </p>

          {cliente.notas && (
            <p className="text-2xl text-gray-700 mt-4">
              <span className="text-gray-800 uppercase font-bold">Notas: </span>
              {cliente.notas}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default VerCliente;
