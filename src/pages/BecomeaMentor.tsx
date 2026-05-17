import { useState } from 'react';
import { CheckCircle, ArrowRight, DollarSign, Users, Star, Clock } from 'lucide-react';

const benefits = [
  { icon: DollarSign, title: 'Earn on your schedule', desc: 'Set your own pricing and availability. Accept requests when it works for you.' },
  { icon: Users, title: 'Reach people who need you', desc: 'Your story, background, and experience can change someone\'s trajectory.' },
  { icon: Star, title: 'Build your reputation', desc: 'Grow reviews, increase your rate, and become a top voice on the platform.' },
  { icon: Clock, title: 'Takes 5–10 minutes per video', desc: 'Record on your phone. No equipment required. Deliver on your own time.' },
];

const topics = [
  'Sports motivation', 'Confidence', 'Discipline', 'Work ethic', 'School motivation',
  'College applications', 'Career / job interview', 'Vaping / drug use', 'Better choices',
  'Character development', 'Big game / event prep', 'General encouragement', 'Military / service',
  'Recovery / sobriety', 'Mental health awareness', 'Entrepreneurship',
];

const ageGroups = ['Under 10', '10–12', '13–15', '16–18', '19–24', '25+'];

export default function BecomeaMentor() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);

  const toggleTopic = (t: string) =>
    setSelectedTopics(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  const toggleAge = (a: string) =>
    setSelectedAges(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-16 bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-green-600" />
          </div>
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-3">Application Submitted!</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Thank you for applying to become a PepClip mentor. Our team will review your application and reach out within 3–5 business days with next steps, including instructions for your intro video and profile setup.
          </p>
          <a href="#/" className="btn-primary">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero */}
      <div className="bg-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-orange-400 font-display font-semibold text-sm uppercase tracking-widest mb-3">Join PepClip</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Use your story, experience,<br />or platform to make a difference.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            PepClip helps athletes, coaches, professionals, and community leaders send personalized video messages that encourage, motivate, and guide people who need the right voice.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-orange-500" />
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-1 text-base">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-3">Apply to Become a Mentor</h2>
          <p className="text-slate-500">We review all applications and reach out within 3–5 days.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-7">
          {/* Basic info */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Basic Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">First Name *</label>
                <input required type="text" placeholder="Your first name" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Last Name *</label>
                <input required type="text" placeholder="Your last name" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Email *</label>
                <input required type="email" placeholder="you@example.com" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Phone</label>
                <input type="tel" placeholder="(555) 000-0000" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">City, State *</label>
                <input required type="text" placeholder="e.g. Canton, OH" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">ZIP Code</label>
                <input type="text" maxLength={5} placeholder="ZIP" className="input-field" />
              </div>
            </div>
          </div>

          {/* Background */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Your Background
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Current Role / Title *</label>
                <input required type="text" placeholder="e.g. Former NFL player, High School Coach, Entrepreneur..." className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Accomplishments & Background *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your achievements, experience, and what makes your story compelling to others. What have you accomplished? What have you overcome?"
                  className="input-field resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Who are you best suited to help?
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe who would benefit most from hearing from you — athletes, teens, young adults, people in recovery, first-gen students, etc."
                  className="input-field resize-none"
                />
              </div>
            </div>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Topics You're Comfortable With *</h3>
            <p className="text-slate-500 text-sm mb-4">Select all that apply.</p>
            <div className="flex flex-wrap gap-2">
              {topics.map(t => (
                <button
                  type="button"
                  key={t}
                  onClick={() => toggleTopic(t)}
                  className={`text-sm px-3 py-1.5 rounded-full border transition-colors font-medium ${
                    selectedTopics.includes(t)
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Age groups */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Age Groups You Connect With *</h3>
            <p className="text-slate-500 text-sm mb-4">Select all that apply.</p>
            <div className="flex flex-wrap gap-2">
              {ageGroups.map(a => (
                <button
                  type="button"
                  key={a}
                  onClick={() => toggleAge(a)}
                  className={`text-sm px-4 py-2 rounded-full border transition-colors font-medium ${
                    selectedAges.includes(a)
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'border-slate-200 text-slate-600 hover:border-orange-300'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-100">Preferences</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Base Price You'd Charge</label>
                <input type="text" placeholder="e.g. $50, $100, $250" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Standard Turnaround</label>
                <input type="text" placeholder="e.g. 48 hours, 3 days" className="input-field" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {[
                { id: 'rush', label: 'I\'m open to rush requests (extra fee applies)' },
                { id: 'local', label: 'I\'m interested in local requests from my area' },
                { id: 'guidelines', label: 'I agree to PepClip\'s content and safety guidelines *', required: true },
              ].map(({ id, label, required }) => (
                <label key={id} className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-orange-500" required={required} />
                  <span className="text-sm text-slate-600">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-100">Social Media (optional)</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Instagram', 'Twitter / X', 'TikTok', 'YouTube'].map(s => (
                <div key={s}>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">{s}</label>
                  <input type="text" placeholder={`@${s.split(' ')[0].toLowerCase()}`} className="input-field" />
                </div>
              ))}
            </div>
          </div>

          {/* Topics to avoid */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Topics to NOT send you requests for</label>
            <textarea
              rows={2}
              placeholder="Are there any topics you're not comfortable speaking about? List them here."
              className="input-field resize-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center text-base py-4">
            Submit Mentor Application <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
