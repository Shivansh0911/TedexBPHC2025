import React from 'react';
import { motion } from 'framer-motion';
import TimelineEvent from '../components/tlog/TimelineEvent';
import { Helmet } from 'react-helmet';

// Mock data for timeline events
const timelineData = [
  {
    id: 1,
    year: 2024,
    theme: "Breaking Boundaries",
    date: "April 15, 2024",
    photoUrl: "https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "TEDx BITS Hyderabad 2024 explored the limitless potential of human innovation and creativity, featuring talks on technological breakthroughs, cultural barriers, and personal limitations.",
  },
  {
    id: 2,
    year: 2023,
    theme: "Paradigm Shift",
    date: "March 25, 2023",
    photoUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Our 2023 event focused on revolutionary ideas that challenge established norms and present alternative perspectives on science, society, art, and technology.",
  },
  {
    id: 3,
    year: 2022,
    theme: "The Next Chapter",
    date: "April 10, 2022",
    photoUrl: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Following the global pandemic, TEDx BITS Hyderabad 2022 focused on rebuilding, reimagining, and creating a more resilient and sustainable future across all domains of human endeavor.",
  },
  {
    id: 4,
    year: 2021,
    theme: "Digital Renaissance",
    date: "Virtual Event, May 5, 2021",
    photoUrl: "https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Our first virtual TEDx explored how technology is enabling a new era of creativity, connection, and innovation despite physical limitations and global challenges.",
  },
  {
    id: 5,
    year: 2020,
    theme: "Vision 2020",
    date: "February 15, 2020",
    photoUrl: "https://images.pexels.com/photos/7088500/pexels-photo-7088500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "The last in-person event before the pandemic focused on clarity of vision, foresight, and the bold ideas needed to address the challenges of a new decade.",
  },
];

const TLogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TLog | TEDx BITS Hyderabad 2025</title>
        <meta name="description" content="Explore the journey of TEDx BITS Hyderabad through the years, from past events to our evolution as a platform for ideas worth spreading." />
      </Helmet>
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-tedx-red">T</span>
                <span className="text-white">Log</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Journey through the history of TEDx BITS Hyderabad, exploring the themes, speakers, and ideas that have shaped our events over the years.
              </p>
            </motion.div>
            
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Vertical line (only visible on larger screens) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-tedx-red/50 transform -translate-x-1/2"></div>
              
              {/* Timeline events */}
              {timelineData.map((event, index) => (
                <TimelineEvent
                  key={event.id}
                  year={event.year}
                  theme={event.theme}
                  date={event.date}
                  photoUrl={event.photoUrl}
                  description={event.description}
                  isLeft={index % 2 === 0}
                />
              ))}
            </motion.div>
            
            {/* Legacy */}
            <motion.div 
              className="mt-20 glass p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                <span className="text-white">Our</span> <span className="text-tedx-red">Legacy</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Since its inception, TEDx BITS Hyderabad has been committed to bringing together the brightest minds and most innovative ideas to our campus. What started as a small gathering has evolved into one of the most anticipated intellectual events in the region, attracting speakers and attendees from across India and beyond.
              </p>
              <p className="text-gray-300">
                Each year, we strive to push boundaries, challenge conventions, and inspire action through carefully curated talks that reflect the spirit of our times while looking boldly toward the future. As we prepare for TEDx BITS Hyderabad 2025, we carry forward this legacy of excellence and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TLogPage;