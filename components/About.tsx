'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { HiUsers, HiClock, HiGlobe } from 'react-icons/hi'
import { GiTrophy } from 'react-icons/gi'
import { FaAward } from 'react-icons/fa'

const stats = [
  { value: '15+', label: 'Years Excellence', icon: <HiClock className="text-3xl" /> },
  { value: '120+', label: 'Projects Delivered', icon: <HiGlobe className="text-3xl" /> },
  { value: '85+', label: 'Happy Clients', icon: <HiUsers className="text-3xl" /> },
  { value: '10+', label: 'Industry Awards', icon: <GiTrophy className="text-3xl" /> },
]

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/team.png"
                alt="Engineering team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden lg:block">
              <p className="text-3xl font-bold gradient-text">25+</p>
              <p className="text-sm text-gray-400">Years of combined<br />expertise</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-semibold tracking-wider">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Engineering the<br />
              <span className="gradient-text">Future of Construction</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2010, Arta Structures has established itself as a leading engineering 
              and construction company dedicated to excellence in every project we undertake.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our team of experienced engineers, architects, and project managers work together 
              to deliver innovative solutions that meet the highest standards of quality, safety, 
              and sustainability.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 glass-card rounded-xl"
                >
                  <div className="text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About