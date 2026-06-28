'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-cyan-600 dark:text-cyan-400">ARTA</span>
              <span className="text-gray-800 dark:text-white">STRUCTURES</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Building excellence through innovative engineering and quality construction since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition">Services</Link></li>
              <li><Link href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition">Projects</Link></li>
              <li><Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Structural Engineering</li>
              <li className="text-gray-600 dark:text-gray-400">Construction</li>
              <li className="text-gray-600 dark:text-gray-400">Architectural Design</li>
              <li className="text-gray-600 dark:text-gray-400">Project Management</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all">
                <FaFacebook className="text-gray-700 dark:text-white hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all">
                <FaTwitter className="text-gray-700 dark:text-white hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all">
                <FaLinkedin className="text-gray-700 dark:text-white hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all">
                <FaInstagram className="text-gray-700 dark:text-white hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Arta Structures. Made with <HiHeart className="inline text-red-500 animate-pulse" /> for excellence
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer