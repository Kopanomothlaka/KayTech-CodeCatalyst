
import { Link } from 'react-router-dom';
import { Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TS</span>
              </div>
              <span className="text-xl font-bold">TechSolutions</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              We're a cutting-edge software development company providing innovative tech solutions 
              to help businesses thrive in the digital age. From web development to AI automation, 
              we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="mailto:info@techsolutions.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 text-sm">Web Development</span></li>
              <li><span className="text-gray-300 text-sm">App Development</span></li>
              <li><span className="text-gray-300 text-sm">Cloud Solutions</span></li>
              <li><span className="text-gray-300 text-sm">AI Automation</span></li>
              <li><span className="text-gray-300 text-sm">UX/UI Design</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TechSolutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
