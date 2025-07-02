
import { Code, Layout, Phone, Cloud, Database, Users, Pencil, Search, Image, Contact } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Layout,
      title: 'Web Design',
      description: 'Visually appealing and brand-tailored websites that make your business stand out online.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Scalable web applications using the latest technologies and best practices.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Phone,
      title: 'App Design',
      description: 'Intuitive mobile app interfaces that provide exceptional user experiences.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'App Development',
      description: 'High-performance mobile applications for iOS and Android platforms.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and hosting solutions for modern businesses.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Database,
      title: 'Data Analytics & BI',
      description: 'Insight-driven decision-making with comprehensive data analytics and business intelligence.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support for all our solutions and services.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Pencil,
      title: 'UX/UI Design',
      description: 'Engaging and user-friendly designs that enhance user satisfaction and conversion.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Image,
      title: 'Drone Hire',
      description: 'Professional drone services for photography, surveying, mapping, and inspections.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Contact,
      title: 'AI Automation',
      description: 'AI-powered automation solutions to streamline processes and boost efficiency.',
      color: 'from-violet-500 to-violet-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
        >
          <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <service.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
