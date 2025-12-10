import { Heart, Users, Award, Target } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Surveillance First',
      description: 'We strive toward empowering our clients to stay ahead of potential health crises',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We partner with healthcare providers to create solutions that elevate clients engagement for proactive care',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We aim for the highest standards in gadget essentials geared toward predictive surveillance and improved outcomes',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuous improvement through cutting-edge research and development',
    },
  ];

  const team = [
    {
      name: 'Dr. Paul Ufoegbunam',
      role: 'Chief Medical Officer',
      bio: '15+ years in Anaesthesiology and Critical Care',
    },
    {
      name: 'Alabike David',
      role: 'Chief Executive Officer',
      bio: '10+ years in Health Tech entrepreneurship and Management',
    },
    {
      name: 'Dr Matt Ichoku',
      role: 'VP of Clinical Operations',
      bio: '15+ years in Clinical Operations with expertise in remote monitoring',
    },
    {
      name: 'Chioma Nwano',
      role: 'Business Development Lead',
      bio: 'Finance Analyst|MBA|Business and Strategy Development Expert',
    },
  ];

  return (
    <div className="bg-white">
      {/* Compact Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-medical-blue-900 to-slate-900 text-white py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h1 className="text-2xl sm:text-3xl font-heading font-bold">
              About <span className="bg-gradient-to-r from-medical-blue-400 to-cyan-400 bg-clip-text text-transparent">VeriHealth</span>
            </h1>
            <p className="text-sm text-slate-400">
              Pioneering the future of remote patient monitoring
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                VeriHealth was founded with a simple yet powerful vision to give people proactive
                 control over their health through integrated remote monitoring and rapid intelligent care
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Smart devices has revolutionize personalized healthcare and improved how chronic conditions are averted,
                diminishing critical complications. Therefore, our mission is to advance solutions
                that combines predictive surveillance with interventions that drives better health outcomes
              </p>
              <p className="text-lg text-gray-600">
                Our platform empowers healthcare providers with real-time data and actionable 
                insights for swift action that delivers proactive care and improved
                patient wellbeing.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" 
                alt="Healthcare professionals collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="h-16 w-16 rounded-full bg-medical-blue-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-medical-blue-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry experts dedicated to transforming healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="h-48 w-48 rounded-full bg-gradient-to-br from-medical-blue-400 to-medical-blue-600 mx-auto mb-4"></div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-medical-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 lg:py-14 bg-medical-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
              Impact by the Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-heading font-bold mb-2">10,000+</div>
              <p className="text-xl text-blue-100">Patients monitored daily</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-heading font-bold mb-2">500+</div>
              <p className="text-xl text-blue-100">Healthcare providers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-heading font-bold mb-2">40%</div>
              <p className="text-xl text-blue-100">Reduction in hospital readmissions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
