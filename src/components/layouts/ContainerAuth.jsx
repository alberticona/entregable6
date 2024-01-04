
const ContainerAuth = ({ children }) => {
  return (
    <section className="bg-dark text-white h-screen overflow-auto font-urbanist p-4 flex justify-center items-center bg-[url(/images/auth-bg-mobile.png)] md:bg-[url(/images/auth-bg-desktop.png)] bg-no-repeat bg-right-bottom">
        <article className="md:grid md:grid-cols-2 gap-8 items-center">
            {children}
        </article>
    </section>
  );
};
export default ContainerAuth;