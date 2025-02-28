import Typography from '../ui/Typography';

const TopBar = () => {
  return (
    <section className="fixed top-0 left-0 right-0">
      <div className="border rounded-lg h-16 text-text flex items-center px-12 justify-between bg-topBar-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100">
        {/* TODO: Name with Icon  */}
        <div className="flex flex-row gap-1">
          <img src="/sample-logo.svg" alt="logo" />
          <Typography
            variant="h3"
            className="text-txt-light self-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary from-20% via-accent via-47% to-secondary to-90%"
          >
            <a href="#">Norie.</a>
          </Typography>
        </div>

        {/* TODO: Navigation Links */}
        <div className="text-txt-light">
          <nav className="flex gap-24">
            <Typography variant="p" className="hover:text-primary">
              <a href="#">Stacks</a>
            </Typography>

            <Typography variant="p" className="hover:text-primary">
              <a href="#">Projects</a>
            </Typography>

            <Typography variant="p" className="hover:text-primary">
              <a href="#">Experiences</a>
            </Typography>

            <Typography variant="p" className="hover:text-primary">
              <a href="#">Contacts</a>
            </Typography>
          </nav>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
export default TopBar;
