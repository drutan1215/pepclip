import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const buyerFAQs: FAQItem[] = [
  {
    q: 'How does PepClip work?',
    a: 'You answer a few guided questions about who the video is for and what they need. We match you with relevant mentors. You pick one, fill out a request form with your details, pay, and the mentor records a personalized video — usually within 2–5 days.',
  },
  {
    q: 'Who are the mentors on PepClip?',
    a: 'Mentors include local coaches, college athletes, professional athletes, educators, business professionals, military veterans, counselors, and people who have overcome significant challenges. All mentors are reviewed and accepted before they can take requests.',
  },
  {
    q: 'How personalized are the videos?',
    a: 'Highly personalized. You provide the recipient\'s name, age, specific situation, what the mentor should mention, what to avoid, and the tone you want. Mentors use all of this to make the video feel tailored — not generic.',
  },
  {
    q: 'Can I request a video for a sensitive topic like drugs or vaping?',
    a: 'Yes. PepClip was designed with those situations in mind. We have mentors who specialize in tough conversations — including substance use, better choices, and discipline. You can specify exactly how you want the topic handled and what tone to take.',
  },
  {
    q: 'How long are the videos?',
    a: 'Most PepClip videos run 1–3 minutes. The goal is a focused, powerful message — not a long talk. Some mentors offer extended videos for an additional fee.',
  },
  {
    q: 'What if the mentor doesn\'t accept my request?',
    a: 'If a mentor declines your request, you receive a full refund and can choose a different mentor. Mentors can decline requests that fall outside their comfort zone or expertise.',
  },
  {
    q: 'What if I\'m not happy with the video?',
    a: 'Contact us if the video significantly missed the mark compared to your request. We\'ll review it and work to make it right — whether that means a revision or a refund.',
  },
  {
    q: 'How do I receive the video?',
    a: 'You receive an email with a link to download or stream your PepClip. It\'s also saved in your account so you can access it anytime.',
  },
  {
    q: 'Can I share the video with others?',
    a: 'Yes. Once you receive your video, you can download it and share it however you like — text, email, social media, or play it on a TV.',
  },
  {
    q: 'Is there a rush option if I need the video fast?',
    a: 'Yes. Most mentors offer 48-hour and 24-hour rush delivery for an additional fee. Select mentors offer same-day delivery. You choose your delivery speed when placing the request.',
  },
];

const mentorFAQs: FAQItem[] = [
  {
    q: 'Who can become a PepClip mentor?',
    a: 'Athletes, coaches, educators, business professionals, military veterans, counselors, and anyone with a story and relevant experience to share. The common thread is: you have something valuable to say to people who need to hear it.',
  },
  {
    q: 'How much can I earn?',
    a: 'You set your own price within your tier. Local mentors typically earn $25–$75 per video. College/experienced mentors earn $75–$150. Pro/featured mentors earn $150–$500+. Rush deliveries command higher rates. As you build reviews, you can increase your price.',
  },
  {
    q: 'How long does it take to record a video?',
    a: 'Most videos take 5–10 minutes to record, plus reviewing the request details beforehand. You can record on your phone — no professional equipment required.',
  },
  {
    q: 'Can I decline requests?',
    a: 'Yes. You can decline any request that falls outside your comfort zone, expertise, or availability. There\'s no penalty for declining — we just ask you to do so promptly so the customer can find another mentor.',
  },
  {
    q: 'What topics am I required to cover?',
    a: 'Only what you list on your profile. During application, you select the topics you\'re comfortable with and those you\'d like to opt out of. Customers can only request videos on topics you\'ve approved.',
  },
  {
    q: 'How do I get paid?',
    a: 'You receive payment via direct deposit or PayPal after each completed video is delivered and accepted. Payments are processed weekly.',
  },
  {
    q: 'Do I need professional video equipment?',
    a: 'No. A modern smartphone and good lighting is all you need. We recommend recording in a quiet, well-lit space with a neutral background, but there\'s no strict requirement.',
  },
  {
    q: 'What if a customer requests a revision?',
    a: 'If a customer feels the video significantly missed their request, they may ask for a revision. You\'ll review the original request and record an updated version. This rarely happens when mentors follow the request details carefully.',
  },
];

interface AccordionProps {
  items: FAQItem[];
}

function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left flex items-start justify-between gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-slate-900 text-sm leading-relaxed">{item.q}</span>
            {open === i
              ? <ChevronUp size={16} className="text-orange-500 shrink-0 mt-0.5" />
              : <ChevronDown size={16} className="text-slate-400 shrink-0 mt-0.5" />
            }
          </button>
          {open === i && (
            <div className="px-5 pb-5 animate-fade-in">
              <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <SEO title="FAQ — PepClip" description="Answers to common questions about PepClip — how it works, pricing, video personalization, and how to become a mentor." />
      <div className="bg-slate-900 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-4xl text-white mb-3">Frequently Asked Questions</h1>
          <p className="text-slate-400">Everything you need to know about PepClip — for families and mentors.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-14">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">Families & Buyers</span>
          </div>
          <Accordion items={buyerFAQs} />
        </div>

        <div id="mentors">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">For Mentors</span>
          </div>
          <Accordion items={mentorFAQs} />
        </div>

        <div className="text-center pt-4">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
