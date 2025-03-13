import Typography from '../ui/Typography';

const Footer = () => {
  return (
    <div className="bg-txt-dark grid w-full gap-2 p-3 md:p-5">
      <Typography variant="small" className="text-txt-light text-center">
        Copyright © 2025. All rights reserved. Designed and Developed by
        Justine Norie.
      </Typography>
      <Typography variant="small" className="text-txt-light text-center">
        Built with <strong className="text-accent">React.js</strong> and{' '}
        <strong className="text-accent">Tailwind CSS</strong> using{' '}
        <strong className="text-accent">Vite</strong>, hosted on{' '}
        <strong className="text-accent">Vercel</strong>.
      </Typography>
    </div>
  );
};

export default Footer;
