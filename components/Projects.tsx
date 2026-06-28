'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'Sky Tower Residential Complex',
    category: 'Residential',
    image: '/images/project1.png',
    description: '35-story luxury apartment building',
    stats: '120 units · 45,000 sqm'
  },
  {
    id: 2,
    title: 'Tech Valley Office Park',
    category: 'Commercial',
    image: '/images/project2.png',
    description: 'Corporate campus with sustainable design',
    stats: '3 towers · 85,000 sqm'
  },
  {
    id: 3,
    title: 'Riverside Mall',
    category: 'Commercial',
    image: '/images/project3.png',
    description: 'Shopping center with modern architecture',
    stats: '200+ stores · 60,000 sqm'
  },
  {
    id: 4,
    title: 'Green Hills Villa',
    category: 'Residential',
    image: '/images/project4.png',
    description: 'Luxury villa with eco-friendly features',
    stats: 'Private pool · Smart home'
  },
  {
    id: 5,
    title: 'Metro Industrial Park',
    category: 'Industrial',
    image: '/images/project5.png',
    description: 'Factory and warehouse complex',
    stats: '50,000 sqm · Logistics hub'
  },
  {
    id: 6,
    title: 'Coastal Bridge Project',
    category: 'Infrastructure',
    image: '/images/project6.png',
    description: 'Major bridge connecting coastal districts',
    stats: '2.5 km · 4 lanes'
  }
]

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider">OUR WORK</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our portfolio of exceptional engineering and construction achievements
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm text-cyan-600 dark:text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-500">{project.stats}</span>
                  <button className="text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <HiArrowRight className="text-xl" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects