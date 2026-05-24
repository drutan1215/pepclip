import { Link } from 'react-router-dom';
import { Shield, CheckCircle, AlertTriangle, Heart, Users, Flag } from 'lucide-react';
import SEO from '../components/SEO';

const principles = [
  {
    icon: Heart,
    title: 'Encouragement, Not Judgment',
    desc: 'Every PepClip is designed to uplift, motivate, and guide — never to shame, guilt, or belittle. Requests that involve shaming, bullying, or negative messaging will be declined.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Users,
    title: 'Sender Controls the Message',
    desc: 'The person ordering the video specifies what to include, what to avoid, the tone, and the overall message goal. Mentors use these instructions to personalize the video appropriately.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Shield,
    title: 'Mentors Set Their Boundaries',
    desc: 'Every mentor selects which topics they\'re comfortable addressing and which they\'re not. Customers can only send requests on topics the mentor has approved. Mentors can decline any request.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Flag,
    title: 'Reporting & Review',
    desc: 'Users can flag any video for review if they believe it violates our guidelines. Flagged content is reviewed by our trust and safety team promptly.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: AlertTriangle,
    title: 'Sensitive Topics Handled Carefully',
    desc: 'Topics like substance use, mental health, and family challenges require trained, appropriate voices. We vet mentors who address these topics for relevant background and experience.',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    icon: CheckCircle,
    title: 'Video Review If Needed',
    desc: 'If a video is flagged or if there are concerns about content before delivery, our team reviews the video prior to release.',
    color: 'bg-teal-100 text-teal-600',
  },
];

const prohibited = [
  'Bullying, shaming, or publicly humiliating the recipient',
  'Threats, intimidation, or aggressive language',
  'Content that demeans someone based on race, gender, sexuality, religion, or disability',
  'Explicit sexual content of any kind',
  'Encouraging harmful or dangerous behavior',
  'Medical or legal advice without appropriate credentials',
  'Misinformation or factually false claims',
  'Requests designed to manipulate, control, or psychologically harm the recipient',
];

const guidelines = [
  'Be honest, warm, and supportive — even when delivering a tough-love message',
  'Refer to the recipient by name and acknowledge their specific situation',
  'Focus on what they can do, not just what they\'ve done wrong',
  'Use language appropriate to the recipient\'s age',
  'Avoid guaranteeing specific outcomes ("you WILL make the team")',
  'Decline any request that makes you uncomfortable or asks you to say something you don\'t believe',
  'Record in a clean, appropriate environment',
  'Keep the message focused on the recipient — not on promoting yourself or other platforms',
];

export default function Safety() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <SEO title="Safety & Guidelines — PepClip" description="How PepClip protects both recipients and mentors. Our core principles, prohibited content policy, and how to report a concern." />
      {/* Hero */}
      <div className="bg-slate-900 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Shield size={26} className="text-green-400" />
          </div>
          <h1 className="font-display font-bold text-4xl text-white mb-3">Safety & Guidelines</h1>
          <p className="text-slate-400 leading-relaxed">
            PepClip is built on trust. This page outlines how we protect the people on both sides of every video — the recipient and the mentor.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-14">
        {/* Core Principles */}
        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-6">Our Core Safety Principles</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prohibited */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
          <h2 className="font-display font-bold text-xl text-slate-900 mb-5 flex items-center gap-2">
            <AlertTriangle size={20} className="text-red-500" /> Prohibited Content
          </h2>
          <p className="text-slate-500 text-sm mb-5">
            The following are not allowed on PepClip — for any mentor, any request, under any circumstances.
          </p>
          <ul className="space-y-3">
            {prohibited.map(p => (
              <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Mentor Guidelines */}
        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-5">Mentor Content Guidelines</h2>
          <p className="text-slate-500 text-sm mb-5 leading-relaxed">
            All PepClip mentors agree to the following guidelines before going live on the platform.
          </p>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <ul className="space-y-3">
              {guidelines.map(g => (
                <li key={g} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reporting */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">How to Report a Concern</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            If you receive a video or see content that you believe violates our guidelines, please contact us immediately. Every report is reviewed by a human member of our trust and safety team.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Safety Team
          </Link>
        </div>

        <p className="text-xs text-slate-400 text-center leading-relaxed">
          PepClip reserves the right to remove mentors, decline requests, and refund orders that violate these guidelines at any time. Our goal is to make PepClip a safe, positive, and genuinely impactful experience for every person it touches.
        </p>
      </div>
    </div>
  );
}
