import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEventProps {
  year: number;
  theme: string;
  date: string;
  photoUrl: string;
  description: string;
  isLeft?: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  year,
  theme,
  date,
  photoUrl,
  description,
  isLeft = true,
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center md:items-start ${isLeft ? 'md:flex-row-reverse' : ''} mb-16`}>
      {/* Line and dot */}
      <div className="hidden md:flex flex-col items-center mx-8">
        <div className="w-px h-full bg-tedx-red/50"></div>
        <motion.div 
          className="w-5 h-5 rounded-full bg-tedx-red relative -mt-2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        ></motion.div>
      </div>
      
      {/* Content */}
      <motion.div 
        className={`glass rounded-xl overflow-hidden w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative h-48 gradient-overlay">
          <img 
            src={photoUrl} 
            alt={`TEDx BITS Hyderabad ${year}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <span className="text-white bg-tedx-red px-3 py-1 rounded-full text-sm inline-block">
                  {year}
                </span>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="text-white text-sm">{date}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">"{theme}"</h3>
          <p className="text-gray-300">
            {description}
          </p>
          
          <div className={`mt-4 flex ${isLeft ? 'justify-start md:justify-end' : 'justify-start'}`}>
            <a 
              href={`#event-${year}`} 
              className="text-tedx-red hover:text-white transition-colors duration-300 flex items-center"
            >
              <span>View Event Details</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`w-4 h-4 ml-1 ${isLeft ? 'md:ml-1 md:mr-0 transform md:rotate-180' : 'ml-1'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineEvent;