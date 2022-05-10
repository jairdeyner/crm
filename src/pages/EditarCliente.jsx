import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

        const response = await request.json();

        setCliente(response);
      } catch (error) {
        console.error(error);
      }

      setCargando(false);
    })();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        Utiliza este formulario para editar datos de un cliente
      </p>

      {cliente.id ? (
        <Formulario cliente={cliente} cargando={cargando} />
      ) : (
        <p>Cliente ID no válido</p>
      )}
    </>
  );
};

export default EditarCliente;
