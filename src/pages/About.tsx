import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Target, Lightbulb } from 'lucide-react';
import SEO from '../components/SEO';

const values = [
  {
    icon: Heart,
    title: 'Connection over content',
    desc: 'The most powerful message comes from someone the recipient already respects, admires, or relates to. We build the bridge between that person and the voice that can reach them.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Target,
    title: 'Specificity changes everything',
    desc: 'Generic doesn\'t land. That\'s why every PepClip is personalized — using the recipient\'s name, situation, and what they specifically need to hear, not a template.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Lightbulb,
    title: 'The right moment matters',
    desc: 'A message delivered the night before a big game, test, or interview can have a different impact than one delivered any other time. Timing is part of the power.',
    color: 'bg-blue-100 text-blue-600',
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <SEO title="About PepClip — The Right Message. From the Right Voice." description="Learn why PepClip was built and what we believe. We help people find the right voice for the message that matters — for sports, school, life, and big moments." />
      {/* Hero */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-orange-400 font-display font-semibold text-sm uppercase tracking-widest mb-3">About PepClip</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            The right message.<br />From the right voice.<br />At the right time.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            PepClip was built around one simple idea: the people in our lives often need to hear something from someone other than us — and we can help find that person.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Origin story */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">Why We Built PepClip</h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Every parent has had the experience of telling their kid the same thing thirty times — about grades, effort, choices, attitude — and watching it go in one ear and out the other. Then a coach says it once and suddenly it clicks.
              </p>
              <p>
                That's not a parenting failure. That's human nature. We respond to voices that carry weight for us personally — people we look up to, people who've been where we are, people who've done what we're trying to do.
              </p>
              <p>
                PepClip was built to close that gap. We created a marketplace where anyone can find that voice — for sports motivation, school struggles, character issues, confidence, big moments, and tough conversations — and have them record a personalized video message for the person who needs to hear it.
              </p>
              <p>
                The platform is for parents, coaches, teachers, mentors, friends, and anyone who cares deeply about someone who might be more ready to listen than they're letting on.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
            <blockquote className="text-slate-700 text-base italic leading-relaxed mb-4">
              "My son watched the video three times before his state championship. He came out different that morning. I've said the same things for two years and none of it landed the way that one video did."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">JM</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Jennifer M.</p>
                <p className="text-slate-400 text-xs">PepClip customer, Ohio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-8 text-center">What We Believe</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-sm">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-slate-900 rounded-2xl p-10 text-center">
          <p className="text-orange-400 font-display font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
          <p className="font-display font-bold text-3xl text-white leading-tight mb-5">
            Help people find the right voice for the message that matters.
          </p>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed mb-8">
            We believe every person deserves access to the kind of mentorship and encouragement that can change a moment — or a trajectory. PepClip makes that accessible, affordable, and personal.
          </p>
          <button onClick={() => navigate('/match')} className="btn-primary">
            Find the Right Voice <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
