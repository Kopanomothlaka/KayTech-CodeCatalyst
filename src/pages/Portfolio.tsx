const Portfolio = () => {
  const projects = [
    {
      id: 17,
      name: 'Voting Master App',
      description: 'Mobile voting app with Firebase backend.',
      images: ['/master1.png', '/master2.png', '/master3.png', '/master4.png'],
      technologies: ['Android Studio', 'Java', 'XML', 'Firebase', 'Kotlin'],
      github: 'https://github.com/Kopanomothlaka/Voting-Master-App'
    },
    {
      id: 19,
      name: 'Mall of the North Manager App',
      description: 'Retail operations manager app for Mall of the North.',
      images: ['/north1.png', '/north2.png', '/north3.png', '/north4.png'],
      technologies: ['Android Studio', 'Java', 'XML', 'Firebase', 'Kotlin'],
      github: 'https://github.com/Kopanomothlaka/Kay-Mall-Manager-App'
    },
    {
      id: 1,
      name: 'Forex Robot',
      description: 'A trading bot leveraging Python for market analysis and MetaTrader 5 (MT5) for execution.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      technologies: ['Python', 'MT5'],
      github: 'https://github.com/Kopanomothlaka/Forex-Robot'
    },
    {
      id: 2,
      name: 'University of Limpopo SRC Voting System',
      description: 'Secure digital voting system designed for student elections.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      technologies: ['Laravel', 'HTML', 'CSS', 'JavaScript', 'Blade', 'PHP'],
      github: 'https://github.com/Kopanomothlaka/SRC-Voting-System'
    },
    {
      id: 3,
      name: 'UNISA SRC Voting System',
      description: 'Firebase-based voting platform built using web technologies.',
      image: '/444287873-a62a663c-b21f-48fa-88d3-cb9bf86517de.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      github: 'https://github.com/Kopanomothlaka/UNISA-SRC-Voting-System'
    },
    {
      id: 4,
      name: 'Aviator Predictor',
      description: 'A predictive model for Aviator games using Python.',
      image: '/avaitor.png',
      technologies: ['HTML', 'CSS', 'Python', 'Betway App'],
      github: 'https://github.com/Kopanomothlaka/Aviator-Predictor'
    },
    {
      id: 5,
      name: 'Mokopane Agent Forensic',
      description: 'Digital forensic website for investigative purposes.',
      image: '/agent.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kopanomothlaka/AGENT-MC-Forensic-Website'
    },
    {
      id: 6,
      name: 'KayTechnologies Website',
      description: 'Business website showcasing tech services.',
      image: '/kay.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kopanomothlaka/KayTech'
    },
    {
      id: 7,
      name: 'Grocery Budget Tracker',
      description: 'Helps users track grocery expenses efficiently.',
      image: '/grocery.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kopanomothlaka/Grocery-Budget-Tracker'
    },
    {
      id: 8,
      name: 'Nike Sales Dashboard',
      description: 'Power BI dashboard for analyzing Nike sales performance.',
      image: '/nikedash.png',
      technologies: ['Power BI', 'DAX', 'Python', 'SQL'],
      github: 'https://github.com/Kopanomothlaka/Nike-Sales-Performance-Power-BI-Dashboard'
    },
    {
      id: 9,
      name: 'University of Limpopo Student Solution',
      description: 'Student support system for managing various services.',
      image: '/ulstuent solution.png',
      technologies: ['Laravel', 'HTML', 'CSS', 'JavaScript', 'Blade', 'PHP'],
      github: 'https://github.com/Kopanomothlaka/UL_Student_Solution'
    },
    {
      id: 10,
      name: 'Lekompo Balcony Mix',
      description: 'A web music mix platform.',
      image: '/balconrny.png',
      technologies: ['TypeScript', 'CSS', 'Others'],
      github: 'https://github.com/Kopanomothlaka/lekompo-balcony-vibes-mix'
    },
    {
      id: 11,
      name: 'Lekompo Music Trend',
      description: 'Music trend tracking platform.',
      image: '/lekompotrend.png',
      technologies: ['TypeScript', 'CSS', 'Others'],
      github: 'https://github.com/Kopanomothlaka/Lekompo-Music-Trend'
    },
    {
      id: 12,
      name: 'BookSA Artists',
      description: 'Artist booking platform for South African talent.',
      image: '/booksa.png',
      technologies: ['TypeScript', 'CSS', 'Others'],
      github: 'https://github.com/Kopanomothlaka/SouthAfrican-Booking-artists'
    },
    {
      id: 13,
      name: 'Facebook Post Automation',
      description: 'Tool for automating Facebook posts.',
      image: '/fbauto.png',
      technologies: ['HTML', 'CSS', 'Python'],
      github: 'https://github.com/Kopanomothlaka/AutomateFacebookPosts'
    },
    {
      id: 14,
      name: 'EFF Cryptocurrency Coin Website',
      description: 'Crypto token website representing EFF Coin.',
      image: '/effcoin.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Rust'],
      github: 'https://github.com/Kopanomothlaka/EFF-Token-Coin-Website'
    },
    {
      id: 15,
      name: 'University of Limpopo Digital Gallery',
      description: 'A digital platform for student artwork and media.',
      image: '/Screenshot 2024-09-10 212847.png',
      technologies: ['Laravel', 'HTML', 'CSS', 'JavaScript', 'Blade', 'PHP'],
      github: 'https://github.com/Kopanomothlaka/UL_Digital_Gallery'
    },
    {
      id: 16,
      name: 'Aviator Signals App',
      description: 'Mobile app for Aviator signal alerts.',
      images: ['/betway1.png', '/betway2.png', '/betway3.png', '/322127446-e2bdfc88-3f60-42d4-a65c-0f5a6cff947b.png'],
      technologies: ['Android Studio', 'Java', 'XML', 'Firebase', 'Kotlin'],
      github: 'https://github.com/Kopanomothlaka/Aviator-Signals-App'
    },
    {
      id: 18,
      name: '727fam Entertainment Website',
      description: 'Entertainment and artist profile site.',
      image: '/727fampicture.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kopanomothlaka/727fam-entertainment-Website'
    },
    {
      id: 20,
      name: 'Virtual Router Machine',
      description: 'Linux-based virtual router setup for internal networking.',
      images: [
        '/A realistic screenshot of a virtual router machine interface running on a virtual machine with Ubunt.jpeg',
        '/A realistic screenshot of a virtual router machine interface running on a virtual machine with Ubunt(1).jpeg'
      ],
      technologies: ['Ubuntu', 'Networking Tools'],
      github: 'https://github.com/Kopanomothlaka/Virtual-router-running-Ubuntu'
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
                  {project.images ? (
                    <div className="w-full h-64 bg-white rounded-t-xl flex items-center justify-center overflow-hidden">
                      <div className="flex w-full h-full gap-2 overflow-x-auto snap-x">
                        {project.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={project.name + ' screenshot ' + (idx + 1)}
                            className="h-64 w-auto object-contain object-center bg-white rounded-t-xl snap-center"
                            loading="lazy"
                            width={320}
                            height={256}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 object-contain object-center bg-white rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width={320}
                      height={256}
                    />
                  )}
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.092-.647.35-1.089.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                    </svg>
                    View on GitHub
                  </a>
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
