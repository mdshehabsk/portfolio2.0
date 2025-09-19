import { Github, Linkedin, MessageCircle, Send } from 'lucide-react';
import profilePhoto from '@/image/MD SHEAHB UDDIN.png';
import Image from 'next/image';

export default function AboutSection() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mdshehabsk/',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/mdshehabsk',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/+8801612212699',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: 'https://t.me/mdshehabsk',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-background via-background-secondary to-background" id='about' >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
             Full stack developer with excellent communication skill
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - Professional Profile Card */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="gradient-professional rounded-3xl p-8 w-full max-w-md text-center shadow-professional transition spring hover:scale-[1.02]">
              {/* Profile Image */}
              <div className="mb-8">
                <div className="w-56 h-56 mx-auto rounded-3xl overflow-hidden ring-4 ring-white/20 shadow-soft">
                  <Image
                    src={profilePhoto}
                    alt="MD Shehab Uddin - Full Stack Developer"
                    className="w-full h-full object-cover"
                    placeholder='blur'
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="mb-10">
                <h1 className="text-3xl font-bold text-card-professional-foreground mb-3 tracking-tight">
                  MD SHEHAB UDDIN
                </h1>
                <p className="text-card-professional-foreground/80 text-lg font-medium">
                  Full Stack Developer
                </p>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-4 gap-3 mb-10">
                {socialLinks.map((link, i) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-card-professional-foreground hover:bg-white/20 transition-smooth hover:scale-110 shadow-soft border border-white/10"
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="lg:col-span-3 flex items-start">
            <div className="bg-surface-elevated rounded-3xl p-8 w-full shadow-professional border border-gray-800 dark:border-white/50">
              <div className="space-y-6">
                <div className="text-left">
                  <p className="text-text-primary text-lg leading-relaxed tracking-normal">
                    Hi, I’m Shehab, a Full Stack Developer skilled in JavaScript, TypeScript, React, Next.js, Node.js, Express, and MongoDB. I build scalable, performant applications with real-time features and smooth API integrations. Experienced with Docker, AWS, and CI/CD, I deliver efficient, user-friendly solutions from frontend to backend. Passionate about learning and solving real-world problems, I’m always ready for new challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}