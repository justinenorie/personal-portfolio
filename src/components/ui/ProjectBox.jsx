import { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import TechStacks from './TechStacks';
import data from '../../lib/personalData';
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
      data.techStacks.find((t) => t.name.toLowerCase() === tech.toLowerCase())
    )
    .filter(Boolean);

  const [isTouched, setIsTouched] = useState(false);

  return (
    <div className="bg-cards grid items-center gap-10 rounded-3xl p-5 shadow-md transition-transform duration-300 hover:scale-105 md:grid-cols-2">
      <a
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative transition-transform duration-300 hover:scale-103"
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setTimeout(() => setIsTouched(false), 2000)}
      >
        <img
          className="h-80 w-full rounded-2xl object-cover"
          src={image || '/Rectangle.svg'}
          alt={projectName}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 group-hover:opacity-100 ${isTouched ? 'opacity-100' : ''} z-50 transition-opacity duration-300`}
        >
          <Typography variant="p" className="text-txt-dark">
            Visit
          </Typography>
          <FaExternalLinkAlt className="text-txt-dark h-9 w-9" />
        </div>
      </a>

      <div className="grid content-center gap-5 hover:cursor-default">
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
            <FaGithub color="#fefffe" className="h-9 w-9" />
          </a>
        </div>

        <Typography variant="p" className="text-txt-light">
          {description || 'Description'}
        </Typography>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 min-[70rem]:grid-cols-3 min-[100rem]:grid-cols-4">
          {matchedTechStacks.map((tech, index) => (
            <TechStacks
              key={index}
              Icon={tech.icon}
              techName={tech.name}
              color={tech.color}
              techStyle="h-10 w-auto p-2 bg-cards border-1 border-accent rounded-3xl flex items-center gap-2 transition-transform duration-300 hover:scale-110 group"
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
