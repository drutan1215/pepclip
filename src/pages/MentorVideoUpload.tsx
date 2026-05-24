import SEO from '../components/SEO';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdDPPTyfpNksRfPniM3lusTdz27jJtvE1h6u4j-Lg6jUNbYow/viewform?embedded=true';

export default function MentorVideoUpload() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <SEO
        title="Upload Your Intro Video — PepClip"
        description="Submit your intro video to complete your PepClip mentor application."
      />

      {/* Header */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-orange-400 font-display font-semibold text-sm uppercase tracking-widest mb-3">Step 2 of 2</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Upload Your Intro Video
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto">
            Record a short 60–90 second intro video introducing yourself and why you want to be a PepClip mentor. Use the form below to submit it.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-8">
          <h3 className="font-display font-semibold text-slate-900 mb-3">Tips for a great intro video</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-orange-500 font-bold shrink-0">·</span> Keep it 60–90 seconds</li>
            <li className="flex items-start gap-2"><span className="text-orange-500 font-bold shrink-0">·</span> Record in good lighting with a clean background</li>
            <li className="flex items-start gap-2"><span className="text-orange-500 font-bold shrink-0">·</span> Introduce yourself and your background</li>
            <li className="flex items-start gap-2"><span className="text-orange-500 font-bold shrink-0">·</span> Explain who you love to help and why</li>
            <li className="flex items-start gap-2"><span className="text-orange-500 font-bold shrink-0">·</span> Speak naturally — authenticity matters more than production quality</li>
          </ul>
        </div>

        {/* Embedded Google Form */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <iframe
            src={FORM_URL}
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="PepClip Mentor Intro Video Upload"
            className="block"
          >
            Loading form…
          </iframe>
        </div>
      </div>
    </div>
  );
}
