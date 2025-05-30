import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TeamMemberCard from '../components/executives/TeamMemberCard';
import { Helmet } from 'react-helmet';

// Mock data for team members
const teamData = [
  {
    id: 1,
    name: 'Aryan Sharma',
    role: 'Lead Curator',
    category: 'curators',
    photoUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 2,
    name: 'Priya Desai',
    role: 'Co-Curator',
    category: 'curators',
    photoUrl: 'https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 3,
    name: 'Rohan Kapoor',
    role: 'Operations Head',
    category: 'operations',
    photoUrl: 'https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 4,
    name: 'Ananya Patel',
    role: 'Logistics Coordinator',
    category: 'operations',
    photoUrl: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Creative Director',
    category: 'creatives',
    photoUrl: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      website: 'https://example.com',
    },
  },
  {
    id: 6,
    name: 'Zoya Khan',
    role: 'Graphics Designer',
    category: 'creatives',
    photoUrl: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 7,
    name: 'Dev Patel',
    role: 'Marketing Lead',
    category: 'marketing',
    photoUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 8,
    name: 'Leela Reddy',
    role: 'Social Media Manager',
    category: 'marketing',
    photoUrl: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 9,
    name: 'Arjun Nair',
    role: 'Technical Director',
    category: 'technical',
    photoUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      website: 'https://example.com',
    },
  },
  {
    id: 10,
    name: 'Meera Iyer',
    role: 'Web Developer',
    category: 'technical',
    photoUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
];

const ExecutivesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'curators', name: 'Curators' },
    { id: 'operations', name: 'Operations' },
    { id: 'creatives', name: 'Creatives' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'technical', name: 'Technical' },
  ];

  const filteredTeam = selectedCategory 
    ? teamData.filter(member => member.category === selectedCategory)
    : teamData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Executives | TEDx BITS Hyderabad 2025</title>
        <meta name="description" content="Meet the team behind TEDx BITS Hyderabad 2025 - the curators, organizers, and volunteers who make our events possible." />
      </Helmet>
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Meet Our</span> <span className="text-tedx-red">Team</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                TEDx BITS Hyderabad is brought to you by a dedicated team of students passionate about ideas worth spreading. Get to know the individuals behind the event.
              </p>
            </motion.div>
            
            {/* Category filter */}
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              <button
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === null ? 'bg-tedx-red text-white' : 'bg-tedx-gray/50 text-gray-300 hover:bg-tedx-gray'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All Teams
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id ? 'bg-tedx-red text-white' : 'bg-tedx-gray/50 text-gray-300 hover:bg-tedx-gray'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Team members grid */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory || 'all'}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                {filteredTeam.map(member => (
                  <motion.div key={member.id} variants={itemVariants}>
                    <TeamMemberCard
                      name={member.name}
                      role={member.role}
                      photoUrl={member.photoUrl}
                      socialLinks={member.socialLinks}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {filteredTeam.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No team members found in this category.</p>
              </motion.div>
            )}
            
            {/* Join the team */}
            <motion.div 
              className="mt-16 glass p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                <span className="text-white">Join the</span> <span className="text-tedx-red">TEDx Team</span>
              </h2>
              <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                Are you passionate about ideas worth spreading? We're always looking for enthusiastic students to join our team and help make TEDx BITS Hyderabad even better.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/contact" 
                  className="btn-3d"
                >
                  Get Involved
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutivesPage;