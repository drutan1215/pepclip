import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageSquare, Search, FileText, Video, Share2, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: "Tell us what's going on",
    headline: 'Answer a few guided questions',
    body: "Tell us who the message is for, how old they are, what they're going through, and what kind of voice tends to connect with them. This takes less than 2 minutes and helps us show you the right mentors for the situation.",
    tips: [
      'Be specific — the more detail, the better the match',
      'You can always add more context when you place the request',
      "There's no wrong answer — we match from what matters most to you",
    ],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    num: '02',
    icon: Search,
    title: 'Choose the right voice',
    headline: 'Browse matched mentors',
    body: 'Based on your answers, we show you athletes, coaches, professionals, and mentors who match by topic, age group, background, location, and tone. Browse profiles, watch intro videos, read reviews, and compare packages.',
    tips: [
      "Filter by mentor type, price, turnaround time, and rating",
      "Read full bios and reviews from past customers",
      'A local connection can make the message more powerful',
    ],
    color: 'bg-orange-100 text-orange-600',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Share the details',
    headline: "Tell the mentor exactly what you need",
    body: "Fill out the request form with the recipient's name, situation, what the mentor should mention, what to avoid, the tone you want, and any relevant event dates. The more specific you are, the more powerful the video will be.",
    tips: [
      "You can upload a photo, team name, or school for personalization",
      'The mentor uses your notes to make the video feel truly personal',
      'You control the tone — tough love, encouraging, inspirational, or calm',
    ],
    color: 'bg-violet-100 text-violet-600',
  },
  {
    num: '04',
    icon: Video,
    title: 'Receive the video',
    headline: 'The mentor records a personal message',
    body: "The mentor reviews your request, accepts it, and records a video using your details. Every video is personalized — your name, their situation, and the message you want delivered. You'll receive the video link via email when it's ready.",
    tips: [
      'Delivery within your selected timeframe',
      'You can request a revision if the video misses the mark',
      'Videos are available to download and share from your account',
    ],
    color: 'bg-green-100 text-green-600',
  },
  {
    num: '05',
    icon: Share2,
    title: 'Send it at the right moment',
    headline: 'Deliver it when it matters most',
    body: "Share the video link before the big game, test, interview, or hard conversation. You can text it, email it, play it on a TV, or share it on a family group chat. Many recipients watch it multiple times. Some keep it for years.",
    tips: [
      'Time it for the night before a big moment for maximum impact',
      'Watch it together as a family for even greater effect',
      'Recipients can re-watch anytime — it stays in your account',
    ],
    color: 'bg-rose-100 text-rose-600',
  },
];

const orderStatuses = [
  { status: 'Request submitted', desc: 'Your request is received and sent to the mentor.' },
  { status: 'Payment received', desc: 'Payment is confirmed and held securely.' },
  { status: 'Mentor accepted', desc: 'The mentor reviews and accepts your request.' },
  { status: 'In progress', desc: 'The mentor is recording your personalized video.' },
  { status: 'Video uploaded', desc: 'The finished video is uploaded to our platform.' },
  { status: 'Delivered to you', desc: 'You receive an email with your video link.' },
  { status: 'Completed', desc: 'Enjoy and share your PepClip.' },
];

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <SEO title="How It Works — PepClip" description="Learn how PepClip works. Answer a few questions, choose a mentor, share your details, and receive a personalized video — typically in 2–5 days." />
      {/* Hero */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-orange-400 font-display font-semibold text-sm uppercase tracking-widest mb-3">Simple Process</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">How PepClip Works</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            From your first click to the moment they press play — the whole process is simple, guided, and designed around the message that matters.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              {/* Step number + icon */}
              <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-2 shrink-0 sm:w-24">
                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center`}>
                  <step.icon size={26} />
                </div>
                <span className="font-display font-bold text-slate-200 text-2xl">{step.num}</span>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block h-16 w-0.5 bg-slate-200 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 flex-1 shadow-sm">
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-1">{step.title}</p>
                <h2 className="font-display font-bold text-xl text-slate-900 mb-3">{step.headline}</h2>
                <p className="text-slate-500 leading-relaxed mb-5 text-sm">{step.body}</p>
                <ul className="space-y-2.5">
                  {step.tips.map(tip => (
                    <li key={tip} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm mb-16">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-6">Order Status Timeline</h2>
          <div className="space-y-4">
            {orderStatuses.map(({ status, desc }, i) => (
              <div key={status} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < orderStatuses.length - 1 && (
                    <div className="w-0.5 h-6 bg-orange-200 mt-1" />
                  )}
                </div>
                <div className="pb-1">
                  <p className="font-semibold text-slate-900 text-sm">{status}</p>
                  <p className="text-slate-500 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-4">Ready to get started?</h2>
          <p className="text-slate-500 mb-8">It takes 2 minutes to get matched. The right voice is waiting.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/match')} className="btn-primary text-base px-8 py-4">
              Find the Right Voice <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate('/browse')} className="btn-secondary text-base px-8 py-4">
              Browse All Mentors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
