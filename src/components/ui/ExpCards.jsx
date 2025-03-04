import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Typography from './Typography';
import { RiArrowDropDownLine } from "react-icons/ri";


const ExpCard = ({
  image,
  position,
  companyName,
  duration,
  location,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-3xl border-2 bg-cards shadow-lg border-txt-light p-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-6">
          <img
            src={image || '/Rectangle.svg'}
            alt={`${companyName}`}
            className="w-12 h-12"
          />

          <div>
            <Typography variant="h3" className="text-txt-light">
              {position || 'Your Position'}
            </Typography>
            <Typography variant="p" className="text-txt-light">
              {companyName || 'Company Name'}
            </Typography>

            <div className="flex gap-6 items-center mt-1">
              <Typography variant="small" className="text-txt-light">
                {duration || 'January 1995 - December 1995'}
              </Typography>
              <Typography variant="small" className="text-txt-light">
                {location || 'Company Location'}
              </Typography>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <RiArrowDropDownLine 
            className="text-txt-light w-20 h-20"
          />
          {/* <img
            src={image || '/Rectangle.svg'}
            alt={`${companyName}`}
            className="w-12 h-12"
          /> */}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-4"
      >
        <ul className="list-disc pl-15 text-txt-light">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

ExpCard.propTypes = {
  image: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExpCard;
