import { ArrowRight, Video, Lightbulb, Clock, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';

const DEFTFORM_URL = 'https://deftform.com/f/pepclip-mentor-intro-video-Nr1nud';

const tips = [
  { icon: Clock, text: 'Keep it 60–90 seconds — focused and authentic beats long and polished' },
  { icon: Lightbulb, text: 'Introduce yourself, your background, and who you love to help' },
  { icon: Smartphone, text: 'Your phone camera is fine — good lighting matters more than equipment' },
  { icon: Video, text: 'Find a quiet spot with a clean background and speak naturally' },
];

export default function MentorVideoUpload() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 flex flex-col">
      <SEO
        title="Upload Your Intro Video — PepClip"
        description="Submit your intro video to complete your PepClip mentor application."
      />

      {/* Header */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-orange-400 font-display font-semibold text-sm uppercase tracking-widest mb-3">Step 2 of 2</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Upload Your Intro Video
          </h1>
          <p className="text-slate-400 leading-relaxed">
            One short video is all it takes. Record it on your phone, then tap the button below to submit.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-10 flex flex-col gap-8">

        {/* Tips */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="font-display font-bold text-slate-900 mb-5">Tips for a great intro video</h2>
          <ul className="space-y-4">
            {tips.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-orange-500" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pt-1.5">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            When you're ready, tap below. The upload form will open and walk you through the rest.
          </p>
          <a
            href={DEFTFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base py-4 px-8 w-full sm:w-auto justify-center"
          >
            Upload My Intro Video <ArrowRight size={18} />
          </a>
          <p className="text-slate-500 text-xs mt-4">Opens in a new tab · No account required</p>
        </div>

      </div>
    </div>
  );
}
