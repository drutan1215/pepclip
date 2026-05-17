import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Zap, Clock, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Local Voice',
    price: '$25–$75',
    icon: '🏘️',
    desc: 'Best for local athletes, coaches, teachers, business owners, community leaders, and first responders.',
    examples: ['Local high school coach', 'Former local athlete', 'Local business owner', 'Local teacher', 'First responder / firefighter'],
    features: [
      '3–5 day standard delivery',
      'Rush options available (add-on)',
      'Fully personalized to the recipient',
      'You control every detail of the request',
      'Great for ages 8–18',
    ],
    color: 'border-slate-200',
    highlight: false,
  },
  {
    name: 'College / Experienced',
    price: '$75–$150',
    icon: '🎓',
    desc: 'Best for college athletes, college coaches, entrepreneurs, former collegiate competitors, and specialized professionals.',
    examples: ['College athlete on scholarship', 'College coach', 'Successful entrepreneur', 'Former college athlete', 'Specialized counselor or therapist'],
    features: [
      '48-hour delivery available',
      'Higher recognition factor',
      'Deep expertise in specific topics',
      'Great for all age groups',
      'Strong credibility with teens',
    ],
    color: 'border-orange-500',
    highlight: true,
  },
  {
    name: 'Pro / Featured',
    price: '$150–$500+',
    icon: '⭐',
    desc: 'Best for professional athletes, well-known coaches, public figures, and highly recognizable personalities.',
    examples: ['Professional athlete (active or former)', 'Known head coach', 'Public figure or speaker', 'Large social media creator'],
    features: [
      'Rush & same-day delivery available',
      'Maximum recognition and impact',
      'Life-changing for the right recipient',
      'Great for sports, college, career',
      'Worth every penny for the right moment',
    ],
    color: 'border-slate-200',
    highlight: false,
  },
];

const deliveryOptions = [
  { speed: 'Standard Delivery', time: '3–5 days', extra: 'Included in base price', icon: Clock },
  { speed: '48-Hour Delivery', time: '2 days', extra: 'Add 20–30% to base price', icon: Zap },
  { speed: '24-Hour Rush', time: '24 hours', extra: 'Add 40–60% to base price', icon: Zap },
  { speed: 'Same-Day', time: 'Hours', extra: 'Add 75–100% — select mentors only', icon: Star },
];

const faqs = [
  {
    q: 'Do I pay before or after the mentor records the video?',
    a: 'You pay when you submit your request. The mentor then reviews and accepts. If a mentor declines your request, you receive a full refund.',
  },
  {
    q: 'Is the delivery time guaranteed?',
    a: 'Delivery times are guidelines, not hard guarantees — mentors are real people with busy schedules. However, 95%+ of orders are delivered on time or early.',
  },
  {
    q: 'What if I\'m not happy with the video?',
    a: 'We stand behind every PepClip. If the video doesn\'t match your request or falls short in a significant way, contact us and we\'ll work to make it right.',
  },
  {
    q: 'Are there any additional fees?',
    a: 'No hidden fees. The price shown is the total you pay. Rush delivery add-ons are clearly shown when you select your package.',
  },
  {
    q: 'Can I tip a mentor?',
    a: 'Yes! If a mentor blows you away, you can send a gratuity through the platform after delivery.',
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-orange-400 font-display font-semibold text-sm uppercase tracking-widest mb-3">Simple & Transparent</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Pricing that makes sense
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            No hidden fees. No confusing tiers. Just straightforward pricing based on the mentor's background and delivery speed you choose.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tier cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {tiers.map(tier => (
            <div
              key={tier.name}
              className={`bg-white rounded-2xl border-2 p-7 relative flex flex-col ${tier.color} ${tier.highlight ? 'shadow-xl shadow-orange-500/10' : 'shadow-sm'}`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-3xl mb-3">{tier.icon}</div>
              <h3 className="font-display font-bold text-slate-900 text-xl mb-1">{tier.name}</h3>
              <p className={`font-display font-bold text-3xl mb-3 ${tier.highlight ? 'text-orange-500' : 'text-slate-800'}`}>
                {tier.price}
              </p>
              <p className="text-slate-500 text-sm mb-5 leading-relaxed flex-none">{tier.desc}</p>

              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Examples</p>
                <ul className="space-y-1.5">
                  {tier.examples.map(ex => (
                    <li key={ex} className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0" /> {ex}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-5 flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Includes</p>
                <ul className="space-y-2">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => navigate('/match')}
                className={`mt-6 w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                  tier.highlight
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200'
                }`}
              >
                Find a {tier.name} Mentor
              </button>
            </div>
          ))}
        </div>

        {/* Delivery speed */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Delivery Speeds</p>
            <h2 className="section-heading text-3xl">Delivery Options</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliveryOptions.map(({ speed, time, extra, icon: Icon }) => (
              <div key={speed} className="bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-orange-500" />
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-1">{speed}</h3>
                <p className="text-2xl font-bold text-orange-500 mb-2">{time}</p>
                <p className="text-xs text-slate-500">{extra}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="text-sm text-amber-800">
              <strong>Example:</strong> A mentor with a $49 base price would cost $59 for 48-hour delivery, $79 for 24-hour rush, and $99 for same-day — if they offer it.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading text-3xl">Pricing FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display font-bold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">Ready to find the right voice?</h2>
          <button onClick={() => navigate('/match')} className="btn-primary text-base px-8 py-4">
            Get Matched Now <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
