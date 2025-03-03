import { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import TechStacks from './TechStacks';
import techList from '../../lib/tech';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectBox = ({
  image,
  projectName,
  description,
  techStacks,
  githubLink,
  websiteLink,
}) => {
  const matchedTechStacks = techStacks
    .map((tech) =>
      techList.find((t) => t.name.toLowerCase() === tech.toLowerCase())
    )
    .filter(Boolean);

  const [isTouched, setIsTouched] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-10 border-2 border-txt-light p-5 items-center rounded-3xl shadow-md transition-transform duration-300 hover:scale-105">
      <a
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-103 relative group"
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setTimeout(() => setIsTouched(false), 2000)}
      >
        <img
          className="w-full h-80 object-cover rounded-2xl"
          src={image || '/Rectangle.svg'}
          alt={projectName}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        opacity-0 group-hover:opacity-100 ${isTouched ? 'opacity-100' : ''} 
        transition-opacity duration-300 z-50`}
        >
          <Typography variant="p" className="text-txt-dark">
            Visit
          </Typography>
          <FaExternalLinkAlt className="w-9 h-9 text-txt-dark" />
        </div>
      </a>

      <div className="content-center grid gap-5 hover:cursor-default">
        <div className="flex items-center gap-3">
          <Typography variant="h3" className="text-txt-light">
            {projectName || 'Project Name'}
          </Typography>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-150"
          >
            {/* <div className="absolute animate-ping bg-accent w-9 h-9 rounded-full"></div> */}
            <FaGithub color="#fefffe" className="w-9 h-9" />
          </a>
        </div>

        <Typography variant="p" className="text-txt-light">
          {description || 'Description'}
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 min-[70rem]:grid-cols-3 min-[100rem]:grid-cols-4 gap-2 mt-2">
          {matchedTechStacks.map((tech, index) => (
            <TechStacks
              key={index}
              Icon={tech.icon}
              techName={tech.name}
              color={tech.color}
              techStyle="h-10 w-auto p-2 bg-cards rounded-md flex items-center gap-2 transition-transform duration-300 hover:scale-110 group"
              iconStyle="h-6 w-6 text-2xl transition-transform duration-300 group-hover:rotate-12"
              variant="small"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectBox.propTypes = {
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStacks: PropTypes.array.isRequired,
  githubLink: PropTypes.array.isRequired,
  websiteLink: PropTypes.array.isRequired,
};

export default ProjectBox;
