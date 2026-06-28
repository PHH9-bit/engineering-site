'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  GiArchBridge, 
  GiGears, 
  GiGearHammer,
  GiCrane,
  GiReceiveMoney
} from 'react-icons/gi'
import { 
  FaHardHat, 
  FaDraftingCompass, 
  FaBuilding, 
  FaCity 
} from 'react-icons/fa'
import { TbBuildingSkyscraper } from 'react-icons/tb'
import { SiAltiumdesigner } from 'react-icons/si'

const services = [
  { icon: <GiArchBridge className="text-5xl" />, title: 'Structural Engineering', desc: 'Cutting-edge structural design for iconic buildings' },
  { icon: <TbBuildingSkyscraper className="text-5xl" />, title: 'High-Rise Construction', desc: 'Specialized expertise in skyscraper development' },
  { icon: <GiGears className="text-5xl" />, title: 'Smart Infrastructure', desc: 'Intelligent systems for future-ready cities' },
  { icon: <FaDraftingCompass className="text-5xl" />, title: 'Architectural Design', desc: 'Award-winning architectural solutions' },
  { icon: <GiCrane className="text-5xl" />, title: 'Project Management', desc: 'Precision execution and timeline control' },
  { icon: <GiReceiveMoney className="text-5xl" />, title: 'Cost Consulting', desc: 'Optimized budgets without quality compromise' },
]

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-32 bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold tracking-wider">WHAT WE DO</span>
          <h2 className="section-title">
            World-Class <span className="gradient-text">Engineering</span> Services
          </h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className="text-5xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services