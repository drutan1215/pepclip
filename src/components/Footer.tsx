import { NavLink } from 'react-router-dom';
import { Clapperboard, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const sections = [
    {
      heading: 'For Families',
      links: [
        { to: '/match', label: 'Find the Right Voice' },
        { to: '/browse', label: 'Browse Mentors' },
        { to: '/how-it-works', label: 'How It Works' },
        { to: '/pricing', label: 'Pricing' },
        { to: '/faq', label: 'FAQ' },
      ],
    },
    {
      heading: 'For Mentors',
      links: [
        { to: '/become-a-mentor', label: 'Become a Mentor' },
        { to: '/how-it-works', label: 'How Videos Work' },
        { to: '/faq#mentors', label: 'Mentor FAQ' },
        { to: '/safety', label: 'Content Guidelines' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { to: '/about', label: 'About PepClip' },
        { to: '/safety', label: 'Safety & Guidelines' },
        { to: '/contact', label: 'Contact Us' },
        { to: '/privacy', label: 'Privacy Policy' },
        { to: '/terms', label: 'Terms of Service' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <NavLink to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Clapperboard size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight">
                Pep<span className="text-orange-400">Clip</span>
              </span>
            </NavLink>
            <p className="text-sm leading-relaxed mb-5 text-slate-400">
              The right message. From the right voice. At the right time.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Personalized video messages from athletes, coaches, and mentors who can reach the people you love.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[Twitter, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {sections.map(section => (
            <div key={section.heading}>
              <h4 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-widest">
                {section.heading}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map(link => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {year} PepClip, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <NavLink to="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy</NavLink>
            <NavLink to="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms</NavLink>
            <NavLink to="/safety" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Safety</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
