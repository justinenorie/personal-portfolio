import Typography from '../ui/Typography';

const TopBar = () => {
  return (
    <section className="fixed top-0 left-0 right-0 z-50">
      <div className="border rounded-lg h-16 text-text flex items-center px-8 justify-between bg-cards-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100">
        {/* TODO: Name with Icon  */}
        <div className="flex flex-row gap-1">
          {/* <img src="/sample-logo.svg" alt="logo" /> */}

          <a href="#" className="flex gap-1">
            <Typography
              variant="p"
              className="text-txt-light self-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary from-20% via-accent via-47% to-secondary to-90%"
            >
              Justine
            </Typography>
            <Typography variant="p" className="text-primary">Norie</Typography>
          </a>
        </div>

        {/* TODO: Responsive, Mobile Hamburger Menus */}
        <div className="text-txt-light hidden md:block">
          <nav className="flex gap-4 md:gap-8 lg:gap-16 xl:gap-24">
            <Typography variant="p" className="hover:text-primary">
              <a href="#stacks">Stacks</a>
            </Typography>

            <Typography variant="p" className="hover:text-primary">
              <a href="#projects">Projects</a>
            </Typography>

            <Typography variant="p" className="hover:text-primary">
              <a href="#experiences">Experiences</a>
            </Typography>

            <Typography variant="p" className="hover:text-primary">
              <a href="#contacts">Contacts</a>
            </Typography>
            {/*TODO: Add Light and Dark Mode Toggle here */}
          </nav>
        </div>
      </div>
    </section>
  );
};
export default TopBar;
