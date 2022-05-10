import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>

        <nav className="mt-10">
          <NavLink
            className={({ isActive }) =>
              "text-2xl block mt-2 hover:text-blue-300 " +
              (isActive ? "text-blue-300" : "text-white")
            }
            to="/clientes/"
          >
            Clientes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "text-2xl block mt-2 hover:text-blue-300 " +
              (isActive ? "text-blue-300" : "text-white")
            }
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </NavLink>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
