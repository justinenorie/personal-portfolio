import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Typography from './Typography';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

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
    <div className="bg-cards hover:bg-cards/50 content-center rounded-3xl p-6 shadow-lg">
      <div
        className="flex cursor-pointer items-center justify-between self-center"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        tabIndex={0}
      >
        <div className="flex gap-6">
          <img
            src={image || '/Rectangle.svg'}
            alt={`${companyName}`}
            className="hidden h-12 w-12 sm:block"
          />

          <div className="grid gap-1.5">
            <Typography variant="h3" className="text-txt-light">
              {position || 'Your Position'}
            </Typography>
            <Typography variant="p" className="text-txt-light">
              {companyName || 'Company Name'}
            </Typography>

            <div className="flex-col items-center gap-6 min-[57rem]:flex min-[57rem]:flex-row">
              <Typography
                variant="small"
                className="text-txt-light mb-1.5 flex gap-1.5"
              >
                <MdOutlineAccessTimeFilled className="text-primary h-6 w-6 self-center" />
                {duration || 'January 1995 - December 1995'}
              </Typography>
              <Typography
                variant="small"
                className="text-txt-light flex gap-1.5"
              >
                <FaLocationDot className="text-primary h-6 w-6 self-center" />
                {location || 'Company Location'}
              </Typography>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <IoIosArrowDown className="text-txt-light h-20 w-20" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.5 }}
        className="mt-4 overflow-hidden"
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <ul className="text-txt-light list-disc p-6 sm:pl-15">
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
