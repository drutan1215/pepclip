import { useState } from 'react';
import { Mail, MessageSquare, CheckCircle, Shield, HelpCircle, Users } from 'lucide-react';

const reasons = [
  { value: 'general', label: 'General Question' },
  { value: 'order', label: 'Help With an Order' },
  { value: 'mentor', label: 'Mentor Application / Questions' },
  { value: 'safety', label: 'Safety or Content Concern' },
  { value: 'media', label: 'Media / Press Inquiry' },
  { value: 'partnership', label: 'Partnership Opportunity' },
];

const contactOptions = [
  {
    icon: HelpCircle,
    title: 'FAQ',
    desc: 'Find quick answers to common questions about ordering, delivery, and mentors.',
    link: '#/faq',
    linkLabel: 'Browse FAQ',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Shield,
    title: 'Safety Concerns',
    desc: 'Report a video, content concern, or safety issue. Reviewed by a human on our team.',
    link: '#/safety',
    linkLabel: 'Safety Guidelines',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Users,
    title: 'Become a Mentor',
    desc: 'Interested in becoming a PepClip mentor? Start your application here.',
    link: '#/become-a-mentor',
    linkLabel: 'Apply Now',
    color: 'bg-orange-100 text-orange-600',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero */}
      <div className="bg-slate-900 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-4xl text-white mb-3">Contact Us</h1>
          <p className="text-slate-400">
            We're a real team and we read every message. Typical response within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        {/* Quick links */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {contactOptions.map(({ icon: Icon, title, desc, link, linkLabel, color }) => (
            <div key={title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm text-center">
              <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{desc}</p>
              <a href={link} className="text-orange-500 hover:text-orange-600 text-sm font-semibold">
                {linkLabel} →
              </a>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <MessageSquare size={18} className="text-orange-500" />
            </div>
            <h2 className="font-display font-bold text-2xl text-slate-900">Send Us a Message</h2>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={28} className="text-green-600" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">Message Sent!</h3>
              <p className="text-slate-500">
                Thanks for reaching out. Our team will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Name *</label>
                  <input required type="text" placeholder="Your name" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Email *</label>
                  <input required type="email" placeholder="you@example.com" className="input-field" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Reason for Contact *</label>
                <select required className="input-field">
                  <option value="">Select a reason...</option>
                  {reasons.map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Order ID (if applicable)</label>
                <input type="text" placeholder="e.g. PC-12345" className="input-field" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us what's going on and how we can help..."
                  className="input-field resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                Send Message
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Mail size={13} />
                You can also reach us at <a href="mailto:hello@pepclip.com" className="text-orange-500 hover:underline">hello@pepclip.com</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
