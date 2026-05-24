import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, DollarSign, Users, Star, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const PABBLY_WEBHOOK = 'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjcwNTY5MDYzZTA0M2Q1MjZmNTUzMiI_3D_pc/IjU3NjcwNTZlMDYzMTA0MzI1MjY1NTUzMjUxM2Ii_pc';

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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleTopic = (t: string) =>
    setSelectedTopics(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  const toggleAge = (a: string) =>
    setSelectedAges(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);
    setSubmitError('');

    const raw = Object.fromEntries(new FormData(formRef.current).entries());

    // Keys are prefixed with descending numbers so Pabbly's Z-to-A
    // alphabetical sort produces the correct form field order in the sheet.
    const payload: Record<string, unknown> = {
      '22_first_name':           raw.first_name ?? '',
      '21_last_name':            raw.last_name ?? '',
      '20_email':                raw.email ?? '',
      '19_phone':                raw.phone ?? '',
      '18_city_state':           raw.city_state ?? '',
      '17_zip':                  raw.zip ?? '',
      '16_current_role':         raw.current_role ?? '',
      '15_background':           raw.background ?? '',
      '14_best_suited_for':      raw.best_suited_for ?? '',
      '13_topics':               selectedTopics.join(', '),
      '12_age_groups':           selectedAges.join(', '),
      '11_open_to_rush':         raw.open_to_rush ? 'Yes' : 'No',
      '10_interested_in_local':  raw.interested_in_local ? 'Yes' : 'No',
      '09_agreed_to_turnaround': raw.agreed_to_turnaround ? 'Yes' : 'No',
      '08_agreed_to_guidelines': raw.agreed_to_guidelines ? 'Yes' : 'No',
      '07_instagram':            raw.instagram ?? '',
      '06_twitter':              raw.twitter ?? '',
      '05_tiktok':               raw.tiktok ?? '',
      '04_youtube':              raw.youtube ?? '',
      '03_topics_to_avoid':      raw.topics_to_avoid ?? '',
      '02_form_source':          'Become-A-Mentor-Form',
      '01_submitted_at':         new Date().toISOString(),
    };

    try {
      const res = await fetch(PABBLY_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      formRef.current.reset();
      setSelectedTopics([]);
      setSelectedAges([]);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Mentor application webhook error:', err);
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
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
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <SEO title="Become a Mentor — PepClip" description="Apply to join PepClip as a mentor. Athletes, coaches, educators, and professionals can earn money recording personalized video messages for people who need their voice." />
      {/* Hero */}
      <div className="bg-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #2F80ED 1px, transparent 1px)', backgroundSize: '24px 24px' }}
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

        <form id="becomeMemberForm" ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-7">
          {/* Basic info */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Basic Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">First Name *</label>
                <input required type="text" name="first_name" placeholder="Your first name" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Last Name *</label>
                <input required type="text" name="last_name" placeholder="Your last name" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Email *</label>
                <input required type="email" name="email" placeholder="you@example.com" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Phone</label>
                <input type="tel" name="phone" placeholder="(555) 000-0000" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">City, State *</label>
                <input required type="text" name="city_state" placeholder="e.g. Canton, OH" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">ZIP Code</label>
                <input type="text" name="zip" maxLength={5} placeholder="ZIP" className="input-field" />
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
                <input required type="text" name="current_role" placeholder="e.g. Former NFL player, High School Coach, Entrepreneur..." className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Accomplishments & Background *
                </label>
                <textarea
                  required
                  name="background"
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
                  name="best_suited_for"
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
            <div className="space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="open_to_rush" value="yes" className="mt-0.5 accent-orange-500" />
                <span className="text-sm text-slate-600">I'm open to rush requests (extra fee applies)</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="interested_in_local" value="yes" className="mt-0.5 accent-orange-500" />
                <span className="text-sm text-slate-600">I'm interested in local requests from my area</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="agreed_to_turnaround" value="yes" required className="mt-0.5 accent-orange-500" />
                <span className="text-sm text-slate-600">I agree to complete video requests within 48 hours *</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="agreed_to_guidelines" value="yes" required className="mt-0.5 accent-orange-500" />
                <span className="text-sm text-slate-600">I agree to PepClip's content and safety guidelines *</span>
              </label>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-100">Social Media (optional)</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Instagram</label>
                <input type="text" name="instagram" placeholder="@instagram" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Twitter / X</label>
                <input type="text" name="twitter" placeholder="@twitter" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">TikTok</label>
                <input type="text" name="tiktok" placeholder="@tiktok" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">YouTube</label>
                <input type="text" name="youtube" placeholder="@youtube" className="input-field" />
              </div>
            </div>
          </div>

          {/* Topics to avoid */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Topics to NOT send you requests for</label>
            <textarea
              name="topics_to_avoid"
              rows={2}
              placeholder="Are there any topics you're not comfortable speaking about? List them here."
              className="input-field resize-none"
            />
          </div>

          {/* Error message */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting…' : (<>Submit Mentor Application <ArrowRight size={18} /></>)}
          </button>
        </form>
      </div>
    </div>
  );
}
