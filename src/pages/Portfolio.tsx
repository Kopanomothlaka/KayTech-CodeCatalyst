
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      client: 'RetailMax Solutions',
      feedback: 'Increased online sales by 250% within the first quarter'
    },
    {
      id: 2,
      name: 'Healthcare Management System',
      description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker', 'Azure'],
      client: 'MedCare Plus',
      feedback: 'Streamlined our operations and improved patient satisfaction significantly'
    },
    {
      id: 3,
      name: 'FinTech Mobile App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and AI-powered financial insights.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Node.js', 'Redis', 'AI/ML', 'Blockchain'],
      client: 'SecureBank Digital',
      feedback: 'Our customers love the intuitive interface and security features'
    },
    {
      id: 4,
      name: 'IoT Dashboard',
      description: 'Real-time IoT monitoring dashboard for industrial equipment with predictive maintenance and analytics.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Python', 'InfluxDB', 'Grafana', 'MQTT'],
      client: 'Industrial Systems Corp',
      feedback: 'Reduced equipment downtime by 40% through predictive analytics'
    },
    {
      id: 5,
      name: 'AI Content Platform',
      description: 'AI-powered content creation and management platform with automated SEO optimization and social media scheduling.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'OpenAI', 'Prisma', 'Vercel', 'TypeScript'],
      client: 'ContentMax Agency',
      feedback: 'Transformed our content workflow and doubled our productivity'
    },
    {
      id: 6,
      name: 'Drone Fleet Management',
      description: 'Comprehensive drone fleet management system with real-time tracking, mission planning, and data analytics.',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Maps API', 'WebSocket'],
      client: 'AeroSurvey Pro',
      feedback: 'Increased operational efficiency and reduced mission planning time by 60%'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their operations with innovative 
            tech solutions. Each project showcases our commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{project.client}</h4>
                        <p className="text-sm text-gray-600 italic">"{project.feedback}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Project Success
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for our expertise
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
