import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layouts/ContainerAuth";


const BASE_URL = "https://backend-final-project-dev-zdts.3.us-1.fl0.io";

const Register = () => {

  const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		
		axios
			.post(BASE_URL + "/api/auth/register", data)
			.then(() => {
        alert("Usuario creado correctamente");
        navigate("/login");
      })
			.catch((err) => console.log(err));
	}
  return (
    <ContainerAuth>
        <div className="hidden md:block">
          <img className="max-w-[400px]" src="/images/register.png" alt="" />
        </div>
        <main>
          <form onSubmit={handleSubmit} className="grid gap-5">
            <h2 className="text-3xl uppercase font-semibold">Cuenta nueva</h2>
            <label className="grid gap-4">
              <span className="text-white/60 text-sm">E-mail</span>
              <input className="bg-transparent border-b border-secondary outline-none text-lg" type="email" name="email" required />
            </label>
            <label className="grid gap-4">
              <span className="text-white/60 text-sm">Nombre de usuario</span>
              <input className="bg-transparent border-b border-secondary outline-none text-lg" type="text" name="name" required />
            </label>
            <label className="grid gap-4">
              <span className="text-white/60 text-sm">Contraseña</span>
              <input className="bg-transparent border-b border-secondary outline-none text-lg" type="password" name="password" required />
            </label>
            <button className="bg-primary-light uppercase font-semibold p-2 max-w-max px-6 rounded-full mx-auto mt-8 shadow-lg shadow-purple-400/30 hover:shadow-lg hover:shadow-purple-400/30 hover:tracking-widest transition-all" >Crear</button>
            <Link to="/Login" className="max-w-max mx-auto text-sm underline">O iniciar sesión</Link>
          </form>
        </main>
    </ContainerAuth>
  )
}
export default Register;
