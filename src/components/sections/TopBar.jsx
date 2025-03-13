import Typography from '../ui/Typography';
import { RxHamburgerMenu } from 'react-icons/rx';

const TopBar = () => {
  return (
    <section className="fixed top-0 right-0 left-0 z-50">
      <div className="text-text bg-cards/40 bg-opacity-10 flex items-center justify-between rounded-lg bg-clip-padding px-8 py-5 backdrop-blur-sm backdrop-filter">
        <div className="flex flex-row gap-1">
          <a href="#" className="flex gap-1">
            <Typography
              variant="p"
              className="text-txt-light from-primary via-accent to-secondary self-center from-20% via-47% to-90% hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
            >
              Justine
            </Typography>
            <Typography variant="p" className="text-primary">
              Norie
            </Typography>
          </a>
        </div>

        {/* TODO: Responsive, Mobile Hamburger Menus */}
        <div className="text-txt-light">
          <div className="block md:hidden">
            <RxHamburgerMenu />
          </div>
          <div className="hidden md:block">
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
      </div>
    </section>
  );
};
export default TopBar;
