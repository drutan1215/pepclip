import { useNavigate } from 'react-router-dom';
import {
  Trophy, Star, Flame, BookOpen, Heart, AlertTriangle,
  Clock, FileText, Briefcase, GraduationCap, Target,
  MessageCircle, ArrowRight, Shield, Users, Video,
  CheckCircle, Play, ChevronRight
} from 'lucide-react';
import MentorCard from '../components/MentorCard';
import { getFeaturedMentors } from '../data/mentors';

const categories = [
  { icon: Trophy, label: 'Sports Motivation', color: 'from-orange-500 to-amber-500', path: '/browse?cat=sports-motivation' },
  { icon: Star, label: 'Confidence Boost', color: 'from-violet-500 to-purple-600', path: '/browse?cat=confidence' },
  { icon: Flame, label: 'Big Game', color: 'from-red-500 to-orange-500', path: '/browse?cat=big-game' },
  { icon: BookOpen, label: 'School Trouble', color: 'from-blue-500 to-cyan-500', path: '/browse?cat=school-trouble' },
  { icon: Heart, label: 'Better Choices', color: 'from-pink-500 to-rose-500', path: '/browse?cat=better-choices' },
  { icon: AlertTriangle, label: 'Vaping / Drugs', color: 'from-slate-600 to-slate-800', path: '/browse?cat=vaping-drugs' },
  { icon: Clock, label: 'Work Ethic', color: 'from-green-500 to-emerald-600', path: '/browse?cat=work-ethic' },
  { icon: FileText, label: 'Test Motivation', color: 'from-cyan-500 to-blue-500', path: '/browse?cat=test-motivation' },
  { icon: Briefcase, label: 'Job Interview', color: 'from-indigo-500 to-blue-600', path: '/browse?cat=job-interview' },
  { icon: GraduationCap, label: 'College Application', color: 'from-teal-500 to-green-600', path: '/browse?cat=college-application' },
  { icon: Target, label: 'Discipline', color: 'from-amber-500 to-orange-600', path: '/browse?cat=discipline' },
  { icon: MessageCircle, label: 'General Pep Talk', color: 'from-rose-400 to-pink-600', path: '/browse?cat=general-encouragement' },
];

const howSteps = [
  { num: '01', title: 'Tell us what\'s going on', desc: 'Answer a few questions about who the message is for and what they need.' },
  { num: '02', title: 'Choose the right voice', desc: 'Browse matched mentors based on age, topic, location, and background.' },
  { num: '03', title: 'Share the details', desc: 'Give the mentor the name, situation, and what to include or avoid.' },
  { num: '04', title: 'Receive the video', desc: 'The mentor records a personal video within your selected turnaround time.' },
  { num: '05', title: 'Send it at the right moment', desc: 'Share it before the big game, hard conversation, or moment they need it most.' },
];

const trustStats = [
  { value: '2,400+', label: 'Videos Delivered' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '48hr', label: 'Avg Turnaround' },
  { value: '98%', label: 'Would Order Again' },
];

const safetyPoints = [
  'Parents and senders control every detail of the request',
  'Mentors receive clear guidelines on appropriate content',
  'No bullying, shaming, or harmful messaging — ever',
  'Sensitive topics handled with care and discretion',
  'Mentors can decline requests outside their comfort zone',
  'Every video reviewed if safety concerns are flagged',
];

export default function Home() {
  const navigate = useNavigate();
  const featured = getFeaturedMentors();

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero-gradient min-h-screen flex items-center pt-16 relative overflow-hidden">
        {/* Background dots */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-orange-400 rounded-full" />
                <span className="text-orange-300 text-sm font-medium">Personalized video messages that actually land</span>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Pep talks from people{' '}
                <span className="text-orange-400 relative">
                  they'll actually listen to.
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                Find athletes, coaches, professionals, and mentors who can send a custom video message to encourage, motivate, or guide someone who needs the right voice at the right time.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => navigate('/match')}
                  className="btn-primary text-base px-8 py-4"
                >
                  Find the Right Voice <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => navigate('/browse')}
                  className="inline-flex items-center gap-2 text-white border border-white/20 hover:border-white/40 hover:bg-white/5 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
                >
                  Browse Mentors
                </button>
              </div>

              <p className="text-slate-400 text-sm">
                For sports, school, confidence, character, big moments, and tough conversations.
              </p>
            </div>

            {/* Right: floating mentor cards */}
            <div className="relative h-[420px] hidden lg:block">
              {/* Card 1 — top left */}
              <div className="absolute top-0 left-4 w-52 animate-float">
                <div className="bg-white rounded-2xl shadow-2xl p-3 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      className="w-10 h-10 rounded-xl object-cover"
                      alt="Marcus"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Marcus T.</p>
                      <p className="text-[10px] text-slate-500">Football Coach</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {['Discipline','Work Ethic'].map(t => (
                      <span key={t} className="text-[9px] bg-orange-50 text-orange-600 font-medium px-1.5 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-amber-500 font-semibold">★ 4.9 (87)</span>
                    <span className="text-[10px] font-bold text-slate-900">From $75</span>
                  </div>
                </div>
              </div>

              {/* Card 2 — center right */}
              <div className="absolute top-24 right-0 w-56 animate-float-mid">
                <div className="bg-white rounded-2xl shadow-2xl p-3 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/5.jpg"
                      className="w-10 h-10 rounded-xl object-cover"
                      alt="Brianna"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Brianna W.</p>
                      <p className="text-[10px] text-slate-500">WNBA Professional</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {['Sports','Big Game'].map(t => (
                      <span key={t} className="text-[9px] bg-orange-50 text-orange-600 font-medium px-1.5 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-amber-500 font-semibold">★ 4.9 (104)</span>
                    <span className="text-[10px] font-bold text-slate-900">From $175</span>
                  </div>
                </div>
              </div>

              {/* Card 3 — bottom center */}
              <div className="absolute bottom-8 left-24 w-52 animate-float-slow">
                <div className="bg-white rounded-2xl shadow-2xl p-3 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/8.jpg"
                      className="w-10 h-10 rounded-xl object-cover"
                      alt="Jordan"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Jordan H.</p>
                      <p className="text-[10px] text-slate-500">Recovery Coach</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {['Vaping/Drugs','Choices'].map(t => (
                      <span key={t} className="text-[9px] bg-orange-50 text-orange-600 font-medium px-1.5 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-amber-500 font-semibold">★ 4.9 (93)</span>
                    <span className="text-[10px] font-bold text-slate-900">From $60</span>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute inset-1/4 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* ── Categories ───────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Find Your Category</p>
            <h2 className="section-heading text-3xl sm:text-4xl">
              What do they need to hear?
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {categories.map(({ icon: Icon, label, color, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white hover:shadow-lg border border-slate-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-slate-700 text-center leading-tight">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-2">Simple Process</p>
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">How PepClip Works</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From your first click to the moment they watch it — we make the whole process easy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {howSteps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border-2 border-orange-100 flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-orange-500 text-lg">{step.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 mb-2 text-sm leading-tight">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
                {i < howSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-orange-100 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/how-it-works')}
              className="btn-secondary"
            >
              See Full Details <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Featured Mentors ─────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-2">Top Rated</p>
              <h2 className="section-heading text-3xl sm:text-4xl">Featured Mentors</h2>
            </div>
            <button
              onClick={() => navigate('/browse')}
              className="hidden sm:flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
            >
              Browse All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(mentor => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <button
              onClick={() => navigate('/browse')}
              className="btn-secondary"
            >
              Browse All Mentors <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Trust Stats ──────────────────────────────────── */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display font-bold text-4xl text-orange-400 mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Works ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Why PepClip Works</p>
              <h2 className="section-heading text-3xl sm:text-4xl mb-6">
                Because sometimes they need to hear it from someone else.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Parents, coaches, and teachers tell kids the same things repeatedly. But a message from an athlete they follow, a coach they respect, or someone who has been through exactly what they're facing — that lands differently. That's the whole idea behind PepClip.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Personalized to their name, situation, and what they\'re going through',
                  'From someone they already look up to or can relate to',
                  'Delivered at exactly the right moment — before the game, test, or hard conversation',
                  'Something they can watch again and again when they need it',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('/match')} className="btn-primary">
                Find the Right Voice <ArrowRight size={16} />
              </button>
            </div>

            <div className="relative">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Video size={22} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 mb-1">Personalized, not generic</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Every video uses their name, their specific situation, and what YOU tell the mentor matters most.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Users size={22} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 mb-1">The right voice for the right person</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Match by mentor type, topic, location, age group, and message tone — so it actually resonates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                    <Shield size={22} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 mb-1">Safe, controlled, and guided</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">You specify what to include, what to avoid, and the tone. The sender is always in control.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety Section ───────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-100 mb-5">
              <Shield size={26} className="text-green-600" />
            </div>
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">
              Built for encouragement, not judgment.
            </h2>
            <p className="text-slate-500 leading-relaxed">
              PepClip videos are designed to motivate, guide, and encourage. Every request gives the sender control over what's included, what's avoided, and the tone of the message.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {safetyPoints.map(point => (
              <div key={point} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/safety')}
              className="text-sm text-slate-500 hover:text-slate-700 underline underline-offset-2 transition-colors"
            >
              Read our full Safety & Guidelines →
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing Preview ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Transparent Pricing</p>
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">Simple, straightforward pricing</h2>
            <p className="text-slate-500">No hidden fees. You choose the mentor tier and delivery speed.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { tier: 'Local Voice', price: '$25–$75', desc: 'Local coaches, athletes, educators, community leaders, and first responders.', features: ['3–5 day delivery', 'Personalized to your request', 'Best for ages 8–18'] },
              { tier: 'College / Experienced', price: '$75–$150', desc: 'College athletes, coaches, entrepreneurs, and specialized professionals.', features: ['48hr delivery option', 'Deep expertise in their area', 'Great for teens and young adults'], featured: true },
              { tier: 'Pro / Featured', price: '$150–$500+', desc: 'Professional athletes, coaches, and widely recognized public figures.', features: ['Rush delivery available', 'Maximum recognition factor', 'Unforgettable impact'] },
            ].map(({ tier, price, desc, features, featured }) => (
              <div
                key={tier}
                className={`rounded-2xl p-6 border-2 transition-all ${
                  featured
                    ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/10'
                    : 'border-slate-100 bg-white'
                }`}
              >
                {featured && (
                  <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-slate-900 text-lg mb-1">{tier}</h3>
                <p className="font-display font-bold text-3xl text-orange-500 mb-3">{price}</p>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{desc}</p>
                <ul className="space-y-2">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button onClick={() => navigate('/pricing')} className="btn-secondary">
              See Full Pricing & Delivery Options
            </button>
          </div>
        </div>
      </section>

      {/* ── Become a Mentor CTA ──────────────────────────── */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-6">
            <Play size={24} className="text-orange-400" fill="currentColor" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Use your story to make a difference.
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
            PepClip helps athletes, coaches, professionals, and community leaders send personalized video messages that encourage, motivate, and guide people who need the right voice.
          </p>
          <button
            onClick={() => navigate('/become-a-mentor')}
            className="btn-primary text-base px-8 py-4"
          >
            Become a Mentor <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            The right message.<br />From the right voice.
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Find the mentor who can say what they need to hear, at the moment they need to hear it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/match')}
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition-colors shadow-xl text-base"
            >
              Get Matched Now <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/browse')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:border-white hover:bg-white/10 font-semibold px-10 py-4 rounded-xl transition-all text-base"
            >
              Browse Mentors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
