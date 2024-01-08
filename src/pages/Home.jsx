import { SearchIcon } from "../components/icons/Svgs"
import Header from "../components/shared/Header"

const Home = () => {
  return (
    <section className="bg-dark text-white h-screen overflow-auto font-urbanist bg-[url(/images/auth-bg-mobile.png)] md:bg-[url(/images/auth-bg-desktop.png)] bg-no-repeat bg-right-bottom grid grid-rows-[auto_1fr]">
      <Header />

      <section className="p-4">
      <main className="bg-primary-dark p-8 px-4 rounded-3xl mt-12">
        <form className="flex items-center gap-2 bg-white/20 p-3 rounded-xl">
          <button>
            <SearchIcon />
          </button>
          <input className="bg-transparent outline-none flex-1" type="text" placeholder="Buscar..." size={10}/>
          <select className="bg-transparent outline-none">
            <option value="">10</option>
          </select>
        </form>
      </main>
      </section>
    </section>
  )
}
export default Home