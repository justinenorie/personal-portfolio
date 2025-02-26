function TopBar() {
  return (
    <section className="bg-topBar h-16 text-text flex items-center justify-between px-12">
      <a
        href="#"
        className="font-bold text-title hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary from-20% via-accent via-47% to-secondary to-90% animate-bounce"
      >
        Norie.
      </a>
      <div className="flex-1 flex justify-center text-body">
        <nav className="flex gap-36">
          <a
            href="#"
            className="hover:text-primary transform hover:scale-150 transition-transform duration-500 relative group"
          >
            About
          </a>

          <a
            href="#"
            className="hover:text-primary transform hover:scale-150 transition-transform duration-500 relative group"
          >
            Projects
          </a>

          <a
            href="#"
            className="hover:text-primary transform hover:scale-150 transition-transform duration-500 relative group"
          >
            Contact
          </a>
        </nav>
      </div>
    </section>
  );
}
export default TopBar;
