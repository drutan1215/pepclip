import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  MapPin, Clock, Star, Play, Check, ArrowLeft,
  Upload, Calendar, ChevronDown, ChevronUp, Shield
} from 'lucide-react';
import MentorCard from '../components/MentorCard';
import { getMentorById, mentors, mentorTypeLabels } from '../data/mentors';

const tones = ['Encouraging', 'Direct / Tough Love', 'Inspirational', 'Calm & Reassuring', 'Funny / Lighthearted', 'Serious'];

export default function MentorProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const mentor = getMentorById(id || '');

  const [selectedPackage, setSelectedPackage] = useState<'standard' | '48h' | '24h' | 'sameday'>('standard');
  const [tone, setTone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!mentor) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">😕</div>
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">Mentor not found</h2>
          <button onClick={() => navigate('/browse')} className="btn-primary mt-4">Back to Browse</button>
        </div>
      </div>
    );
  }

  const similar = mentors
    .filter(m => m.id !== mentor.id && m.mentorType === mentor.mentorType)
    .slice(0, 3);

  const packages = [
    {
      key: 'standard' as const,
      label: 'Standard',
      price: mentor.basePrice,
      turnaround: mentor.standardTurnaround,
      desc: 'Personalized video message delivered within standard timeframe',
    },
    {
      key: '48h' as const,
      label: '48-Hour',
      price: mentor.rushPrice48h,
      turnaround: '48 hours',
      desc: 'Faster delivery for upcoming events or time-sensitive needs',
    },
    {
      key: '24h' as const,
      label: '24-Hour Rush',
      price: mentor.rushPrice24h,
      turnaround: '24 hours',
      desc: 'Urgent delivery — perfect for tomorrow\'s game or interview',
    },
    ...(mentor.sameDayPrice
      ? [{
          key: 'sameday' as const,
          label: 'Same-Day',
          price: mentor.sameDayPrice!,
          turnaround: 'Same day',
          desc: 'Available for select mentors only. Delivered within hours.',
        }]
      : []),
  ];

  const selectedPkg = packages.find(p => p.key === selectedPackage)!;
  const stars = Math.round(mentor.rating);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (formSubmitted) {
    return (
      <div className="min-h-screen pt-16 bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-green-600" />
          </div>
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-3">Request Submitted!</h2>
          <p className="text-slate-500 mb-2">
            Your PepClip request has been sent to <strong>{mentor.name}</strong>.
          </p>
          <p className="text-slate-500 mb-8">
            You'll receive a confirmation email shortly. {mentor.name} will accept your request and record the video within {selectedPkg.turnaround}.
          </p>
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-8 text-left">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-600">Package</span>
              <span className="font-semibold text-slate-900">{selectedPkg.label} Delivery</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-600">Delivery by</span>
              <span className="font-semibold text-slate-900">{selectedPkg.turnaround}</span>
            </div>
            <div className="flex justify-between text-sm border-t border-orange-100 pt-2 mt-2">
              <span className="font-bold text-slate-900">Total</span>
              <span className="font-bold text-orange-600 text-lg">${selectedPkg.price}</span>
            </div>
          </div>
          <button onClick={() => navigate('/')} className="btn-primary w-full justify-center">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <SEO
        title={`${mentor.name} — PepClip Mentor`}
        description={`Book a personalized video message from ${mentor.name}, ${mentor.currentRole}. ${mentor.bio.slice(0, 120)}...`}
      />
      {/* Hero */}
      <div className="bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={mentor.photo}
            alt={mentor.name}
            className="w-full h-full object-cover object-top opacity-20 blur-sm"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Browse
          </button>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Photo */}
            <div className="relative shrink-0">
              <img
                src={mentor.photo}
                alt={mentor.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white/20 shadow-2xl"
              />
              <button className="absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-orange-500/90 rounded-full flex items-center justify-center">
                  <Play size={18} className="text-white ml-0.5" fill="white" />
                </div>
              </button>
              {mentor.availability === 'available' && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  ● Available
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-orange-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {mentorTypeLabels[mentor.mentorType]}
                </span>
                <span className="bg-white/10 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {mentor.sportProfession}
                </span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-1">{mentor.name}</h1>
              <p className="text-slate-300 text-sm mb-3">{mentor.currentRole}</p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1 text-sm text-slate-300">
                  <MapPin size={14} /> {mentor.location}
                </span>
                <span className="flex items-center gap-1 text-sm text-slate-300">
                  <Clock size={14} /> Standard: {mentor.standardTurnaround}
                </span>
                <span className="flex items-center gap-1 text-sm text-amber-400">
                  {'★'.repeat(stars)} {mentor.rating} ({mentor.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price CTA */}
            <div className="shrink-0">
              <div className="bg-white rounded-2xl p-5 shadow-xl text-center min-w-[160px]">
                <p className="text-xs text-slate-500 mb-1">Starting at</p>
                <p className="font-display font-bold text-3xl text-orange-500">${mentor.basePrice}</p>
                <p className="text-xs text-slate-400 mb-4">Standard delivery</p>
                <a
                  href="#request"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors text-center"
                >
                  Request a PepClip
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left column: content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-xl text-slate-900 mb-4">About {mentor.name}</h2>
              <p className="text-slate-600 leading-relaxed mb-5">{mentor.bio}</p>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">Key Accomplishments</h3>
                <ul className="space-y-2">
                  {mentor.accomplishments.map(a => (
                    <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={15} className="text-green-500 shrink-0 mt-0.5" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best For + Tone */}
            <div className="card p-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display font-bold text-slate-900 mb-3">Best For</h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.bestFor.map(tag => (
                      <span key={tag} className="tag bg-orange-50 text-orange-700 border border-orange-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 mb-3">Message Style</h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.toneTags.map(tag => (
                      <span key={tag} className="tag bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing packages */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-xl text-slate-900 mb-5">Packages & Delivery</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {packages.map(pkg => (
                  <button
                    key={pkg.key}
                    onClick={() => setSelectedPackage(pkg.key)}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${
                      selectedPackage === pkg.key
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-slate-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-display font-bold text-slate-900 text-sm">{pkg.label}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock size={11} /> {pkg.turnaround}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-orange-500">${pkg.price}</p>
                        {selectedPackage === pkg.key && <Check size={14} className="text-orange-500 ml-auto" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{pkg.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-bold text-xl text-slate-900">
                  Reviews
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-slate-900">{mentor.rating}</span>
                  <div>
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} size={14} fill={i < stars ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">{mentor.reviewCount} reviews</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {mentor.reviews.map(review => (
                  <div key={review.id} className="border-t border-slate-100 pt-5 first:border-t-0 first:pt-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{review.author}</p>
                        {review.topic && (
                          <span className="text-[10px] bg-orange-50 text-orange-600 font-medium px-2 py-0.5 rounded-full">
                            {review.topic}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star key={i} size={12} fill="currentColor" />
                        ))}
                        <span className="text-xs text-slate-400 ml-1">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed italic">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: sticky request form */}
          <div className="lg:col-span-1">
            <div id="request" className="card p-6 lg:sticky lg:top-28">
              <h2 className="font-display font-bold text-xl text-slate-900 mb-1">Request a PepClip</h2>
              <p className="text-sm text-slate-500 mb-5">
                Selected: <span className="font-semibold text-orange-600">{selectedPkg.label} — ${selectedPkg.price}</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Recipient's First Name *
                  </label>
                  <input required type="text" placeholder="e.g. Tyler" className="input-field" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Age *</label>
                    <input required type="number" min={5} max={99} placeholder="e.g. 15" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Relationship *</label>
                    <input required type="text" placeholder="e.g. My son" className="input-field" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Name Pronunciation
                  </label>
                  <input type="text" placeholder="How is their name pronounced?" className="input-field" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    What's the situation? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell the mentor what's going on. What has happened? What are they struggling with? What do you hope this video will accomplish?"
                    className="input-field resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Things to mention
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific things you'd like the mentor to say, reference, or address..."
                    className="input-field resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Things to avoid
                  </label>
                  <input type="text" placeholder="Topics, phrases, or references to stay away from..." className="input-field" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Desired Tone
                  </label>
                  <div className="relative">
                    <select
                      value={tone}
                      onChange={e => setTone(e.target.value)}
                      className="input-field appearance-none pr-9"
                    >
                      <option value="">Select a tone...</option>
                      {tones.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Event Date (optional)
                  </label>
                  <div className="relative">
                    <Calendar size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="date" className="input-field pl-9" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Upload photo or reference (optional)
                  </label>
                  <label className="flex flex-col items-center justify-center gap-2 h-20 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-orange-300 hover:bg-orange-50/50 transition-colors">
                    <Upload size={18} className="text-slate-400" />
                    <span className="text-xs text-slate-500">Tap to upload</span>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>

                {/* Package selector compact */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Delivery</p>
                  <div className="space-y-2">
                    {packages.map(pkg => (
                      <label key={pkg.key} className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="delivery"
                            checked={selectedPackage === pkg.key}
                            onChange={() => setSelectedPackage(pkg.key)}
                            className="accent-orange-500"
                          />
                          <span className="text-sm text-slate-700">{pkg.label} <span className="text-slate-400">({pkg.turnaround})</span></span>
                        </div>
                        <span className="font-bold text-sm text-slate-900">${pkg.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 bg-green-50 p-3 rounded-xl border border-green-100">
                  <Shield size={14} className="text-green-600 shrink-0" />
                  Your request is reviewed before {mentor.name} records. You control what's included and avoided.
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  Submit Request — ${selectedPkg.price}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Similar mentors */}
        {similar.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-6">Similar Mentors</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map(m => <MentorCard key={m.id} mentor={m} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
