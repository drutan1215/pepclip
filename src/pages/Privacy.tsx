import { Mail, Shield, Lock, Eye, Trash2 } from 'lucide-react';
import SEO from '../components/SEO';

const sections = [
  {
    icon: Eye,
    title: 'Information We Collect',
    body: 'PepClip collects the information needed to create, deliver, and support personalized video requests, including contact details, request instructions, order details, and mentor application information.',
  },
  {
    icon: Shield,
    title: 'How We Use It',
    body: 'We use this information to match customers with mentors, process requests, communicate order updates, review safety concerns, improve the service, and respond to support messages.',
  },
  {
    icon: Lock,
    title: 'How We Protect It',
    body: 'We limit access to request details and account information to people who need it to deliver or support the service. Sensitive requests are handled with extra care and review when needed.',
  },
  {
    icon: Trash2,
    title: 'Your Choices',
    body: 'You can contact us to update your information, ask questions about your data, or request deletion where legally available. Some records may need to be retained for safety, legal, or transaction reasons.',
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <SEO title="Privacy Policy — PepClip" description="How PepClip collects, uses, and protects your personal information. Clear and straightforward." />
      <div className="bg-slate-900 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-4xl text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-400 leading-relaxed">
            A clear overview of how PepClip handles personal information for customers, recipients, and mentors.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {sections.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <div className="w-11 h-11 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Icon size={21} />
              </div>
              <h2 className="font-display font-bold text-slate-900 mb-2">{title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">Questions</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            This page is a practical summary for the current prototype. For privacy questions or data requests, contact the PepClip team.
          </p>
          <a href="mailto:hello@pepclip.com" className="btn-primary">
            <Mail size={16} /> hello@pepclip.com
          </a>
        </div>
      </div>
    </div>
  );
}
