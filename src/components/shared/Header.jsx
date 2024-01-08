import { Link } from "react-router-dom"
import { PlaylistIcon } from "../icons/Svgs"
import { useState } from "react"
import { logout } from "../../store/slices/user.slice"
import { useDispatch } from "react-redux"

const Header = () => {
  const [isShowAuth, setIsShowAuth] = useState(false)

  const dispatch =useDispatch()

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="flex items-center justify-between p-4 primary-dark relative">
        <Link className="uppercase font-semibold">Gift Music</Link>

        <div className="flex items-center gap-2">
        <button className="uppercase hover:bg-primary-light p-1 px-4 rounded-full border border-secondary">Mi cuenta</button>
        <button className="uppercase hover:bg-primary-light p-1 px-4 rounded-full border border-secondary flex gap-2 items-center font-semibold"> <PlaylistIcon /> <span className="hidden sm:inline">Grabando</span> 1</button>
        </div>

    {/* Pop Up Auth */}
    <div className="absolute right-4 -bottom-4 translate-y-full bg-primary-light grid gap-2 p-3 rounded-xl">
        <Link>Mis grabaciones</Link>
        <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
    </header>
  )
}
export default Header