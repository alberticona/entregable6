import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layouts/ContainerAuth"
import { useDispatch } from "react-redux";
import { login } from "../store/slices/user.slice";

const Login = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      dispatch(login(data, navigate));
    };
  

  return (
  <ContainerAuth>
        <div className="hidden md:block">
          <img className="max-w-[400px]" src="/images/login-img.png" alt="" />
        </div>
        <main>
          <form onSubmit={handleSubmit} className="grid gap-5">
            <h2 className="text-3xl uppercase font-semibold">Iniciar Sesión</h2>
            <label className="grid gap-4">
              <span className="text-white/60 text-sm">E-mail</span>
              <input className="bg-transparent border-b border-secondary outline-none text-lg" type="email" name="email" required />
            </label>
            <label className="grid gap-4">
              <span className="text-white/60 text-sm">Contraseña</span>
              <input className="bg-transparent border-b border-secondary outline-none text-lg" type="password" name="password" required />
            </label>
            <button className="bg-primary-light uppercase font-semibold p-2 max-w-max px-6 rounded-full mx-auto mt-8 shadow-lg shadow-purple-400/30 hover:shadow-lg hover:shadow-purple-400/30 hover:tracking-widest transition-all" >Entrar</button>
            <Link to="/Register" className="max-w-max mx-auto text-sm underline">O crear una cuenta nueva</Link>
          </form>
        </main>
  </ContainerAuth>)
}
export default Login