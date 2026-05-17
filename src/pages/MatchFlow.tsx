import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users, Baby, GraduationCap, Briefcase, User, Heart,
  Trophy, Star, BookOpen, Target, AlertTriangle, Flame,
  FileText, MessageCircle, MapPin, ArrowRight, ArrowLeft,
  Check
} from 'lucide-react';
import StepIndicator from '../components/StepIndicator';
import { MatchFlowAnswers } from '../types';

const steps = ['Who', 'Age', 'Topic', 'Location', 'Voice'];

interface Option {
  value: string;
  label: string;
  icon: React.ReactNode;
  desc?: string;
}

const recipientOptions: Option[] = [
  { value: 'my-child', label: 'My Child', icon: <Baby size={22} />, desc: 'Son or daughter' },
  { value: 'a-friend', label: 'A Friend', icon: <Heart size={22} />, desc: 'Someone you care about' },
  { value: 'a-teammate', label: 'A Teammate', icon: <Trophy size={22} />, desc: 'A fellow athlete' },
  { value: 'a-student', label: 'A Student', icon: <GraduationCap size={22} />, desc: 'Someone you teach' },
  { value: 'an-employee', label: 'An Employee', icon: <Briefcase size={22} />, desc: 'Someone on your team' },
  { value: 'myself', label: 'Myself', icon: <User size={22} />, desc: 'For your own motivation' },
  { value: 'other', label: 'Other', icon: <Users size={22} />, desc: 'Someone else in your life' },
];

const ageOptions: Option[] = [
  { value: 'under-10', label: 'Under 10', icon: <span className="text-xl">👦</span>, desc: 'Elementary age' },
  { value: '10-12', label: '10–12', icon: <span className="text-xl">🧒</span>, desc: 'Tween' },
  { value: '13-15', label: '13–15', icon: <span className="text-xl">🧑</span>, desc: 'Early teen' },
  { value: '16-18', label: '16–18', icon: <span className="text-xl">👨‍🎓</span>, desc: 'High school' },
  { value: '19-24', label: '19–24', icon: <span className="text-xl">🎓</span>, desc: 'College / young adult' },
  { value: '25+', label: '25+', icon: <span className="text-xl">💼</span>, desc: 'Adult' },
];

const messageOptions: Option[] = [
  { value: 'sports-motivation', label: 'Sports Motivation', icon: <Trophy size={20} /> },
  { value: 'confidence', label: 'Confidence', icon: <Star size={20} /> },
  { value: 'school-motivation', label: 'School / Test Motivation', icon: <BookOpen size={20} /> },
  { value: 'discipline-work-ethic', label: 'Discipline / Work Ethic', icon: <Target size={20} /> },
  { value: 'character-choices', label: 'Character / Choices', icon: <Heart size={20} /> },
  { value: 'vaping-drugs', label: 'Vaping / Drugs', icon: <AlertTriangle size={20} /> },
  { value: 'trouble-at-school', label: 'Trouble at School', icon: <BookOpen size={20} /> },
  { value: 'big-game-event', label: 'Big Game / Event', icon: <Flame size={20} /> },
  { value: 'career-job-interview', label: 'Career / Job Interview', icon: <Briefcase size={20} /> },
  { value: 'college-application', label: 'College Application', icon: <GraduationCap size={20} /> },
  { value: 'general-encouragement', label: 'General Encouragement', icon: <MessageCircle size={20} /> },
  { value: 'other', label: 'Other', icon: <FileText size={20} /> },
];

const mentorTypeOptions: Option[] = [
  { value: 'local-coach', label: 'Local Coach', icon: <span className="text-lg">🏋️</span> },
  { value: 'local-athlete', label: 'Local Athlete', icon: <span className="text-lg">🏃</span> },
  { value: 'college-athlete', label: 'College Athlete', icon: <span className="text-lg">🎓</span> },
  { value: 'pro-athlete', label: 'Pro Athlete', icon: <span className="text-lg">⭐</span> },
  { value: 'business-professional', label: 'Business Pro', icon: <span className="text-lg">💼</span> },
  { value: 'teacher-educator', label: 'Teacher / Educator', icon: <span className="text-lg">📚</span> },
  { value: 'military-veteran', label: 'Military / Veteran', icon: <span className="text-lg">🎖️</span> },
  { value: 'overcome-challenges', label: 'Overcame Challenges', icon: <span className="text-lg">💪</span> },
  { value: 'no-preference', label: 'No Preference', icon: <span className="text-lg">✅</span> },
];

const toneOptions: Option[] = [
  { value: 'encouraging', label: 'Encouraging', icon: <span className="text-lg">🌟</span>, desc: 'Warm, uplifting, positive' },
  { value: 'direct-tough-love', label: 'Direct / Tough Love', icon: <span className="text-lg">💪</span>, desc: 'Honest, no-nonsense' },
  { value: 'inspirational', label: 'Inspirational', icon: <span className="text-lg">🔥</span>, desc: 'Story-driven, motivating' },
  { value: 'calm-reassuring', label: 'Calm & Reassuring', icon: <span className="text-lg">☀️</span>, desc: 'Steady, supportive' },
  { value: 'funny-lighthearted', label: 'Funny / Lighthearted', icon: <span className="text-lg">😄</span>, desc: 'Humor with heart' },
  { value: 'serious', label: 'Serious', icon: <span className="text-lg">🎯</span>, desc: 'Focused, intentional' },
];

interface OptionCardProps {
  option: Option;
  selected: boolean;
  onSelect: (value: string) => void;
}

function OptionCard({ option, selected, onSelect }: OptionCardProps) {
  return (
    <button
      onClick={() => onSelect(option.value)}
      className={`relative flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 text-left w-full group ${
        selected
          ? 'border-orange-500 bg-orange-50 shadow-md shadow-orange-500/10'
          : 'border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50/50 hover:shadow-sm'
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
          selected ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-orange-100 group-hover:text-orange-600'
        }`}
      >
        {option.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-sm leading-tight ${selected ? 'text-orange-700' : 'text-slate-800'}`}>
          {option.label}
        </p>
        {option.desc && (
          <p className="text-xs text-slate-500 mt-0.5">{option.desc}</p>
        )}
      </div>
      {selected && (
        <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
          <Check size={12} className="text-white" />
        </div>
      )}
    </button>
  );
}

const stepTitles = [
  'Who is the message for?',
  'How old are they?',
  'What kind of message do they need?',
  'Does local connection matter?',
  'What kind of voice would they listen to?',
];

const stepSubtitles = [
  'Help us understand who this PepClip is for so we can recommend the right voices.',
  'Choose an age range. Some mentors specialize in specific age groups.',
  'Choose the main reason for the message. You can add more details later.',
  'We can show people near you if a hometown connection would make the message more meaningful.',
  'Choose the type of mentor and message tone that might resonate most.',
];

export default function MatchFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<MatchFlowAnswers>>({});
  const [localChoice, setLocalChoice] = useState<'yes' | 'no' | null>(null);
  const [zipCode, setZipCode] = useState('');

  const setAnswer = (key: keyof MatchFlowAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const canAdvance = () => {
    if (step === 0) return !!answers.recipient;
    if (step === 1) return !!answers.age;
    if (step === 2) return !!answers.messageType;
    if (step === 3) return localChoice !== null;
    if (step === 4) return !!answers.mentorType && !!answers.tone;
    return false;
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(s => s + 1);
    } else {
      // Go to browse with query params
      const params = new URLSearchParams();
      if (answers.messageType) params.set('cat', answers.messageType);
      if (answers.mentorType && answers.mentorType !== 'no-preference') params.set('type', answers.mentorType);
      navigate(`/browse?${params.toString()}&matched=true`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 sticky top-16 z-20">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="mb-3">
            <StepIndicator steps={steps} currentStep={step} />
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-24">
        {/* Step header */}
        <div className="mb-8 animate-fade-in" key={step}>
          <p className="text-xs font-medium text-orange-500 uppercase tracking-widest mb-2">
            Step {step + 1} of {steps.length}
          </p>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-2">
            {stepTitles[step]}
          </h1>
          <p className="text-slate-500 text-sm">{stepSubtitles[step]}</p>
        </div>

        {/* Step 1: Recipient */}
        {step === 0 && (
          <div className="grid sm:grid-cols-2 gap-3 animate-slide-up">
            {recipientOptions.map(opt => (
              <OptionCard
                key={opt.value}
                option={opt}
                selected={answers.recipient === opt.value}
                onSelect={v => setAnswer('recipient', v)}
              />
            ))}
          </div>
        )}

        {/* Step 2: Age */}
        {step === 1 && (
          <div className="grid sm:grid-cols-2 gap-3 animate-slide-up">
            {ageOptions.map(opt => (
              <OptionCard
                key={opt.value}
                option={opt}
                selected={answers.age === opt.value}
                onSelect={v => setAnswer('age', v)}
              />
            ))}
          </div>
        )}

        {/* Step 3: Message Type */}
        {step === 2 && (
          <div className="grid sm:grid-cols-2 gap-3 animate-slide-up">
            {messageOptions.map(opt => (
              <OptionCard
                key={opt.value}
                option={opt}
                selected={answers.messageType === opt.value}
                onSelect={v => setAnswer('messageType', v)}
              />
            ))}
          </div>
        )}

        {/* Step 4: Location */}
        {step === 3 && (
          <div className="space-y-4 animate-slide-up">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { val: 'yes', title: 'Yes, show people near me', desc: 'A local voice can make the message feel closer to home.', icon: <MapPin size={22} /> },
                { val: 'no', title: 'No, find the best match', desc: 'Location doesn\'t matter — find the most relevant mentor.', icon: <Star size={22} /> },
              ].map(({ val, title, desc, icon }) => (
                <button
                  key={val}
                  onClick={() => setLocalChoice(val as 'yes' | 'no')}
                  className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all text-left ${
                    localChoice === val
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-slate-200 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${localChoice === val ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">{title}</p>
                    <p className="text-xs text-slate-500">{desc}</p>
                  </div>
                  {localChoice === val && <Check size={16} className="text-orange-500 shrink-0 mt-0.5 ml-auto" />}
                </button>
              ))}
            </div>

            {localChoice === 'yes' && (
              <div className="animate-fade-in">
                <label className="block text-sm font-medium text-slate-700 mb-2">Your ZIP code</label>
                <input
                  type="text"
                  placeholder="e.g. 44702"
                  value={zipCode}
                  onChange={e => setZipCode(e.target.value)}
                  maxLength={5}
                  className="input-field max-w-xs"
                />
              </div>
            )}
          </div>
        )}

        {/* Step 5: Mentor Type + Tone */}
        {step === 4 && (
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="font-display font-semibold text-slate-900 mb-3">Preferred mentor type</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {mentorTypeOptions.map(opt => (
                  <OptionCard
                    key={opt.value}
                    option={opt}
                    selected={answers.mentorType === opt.value}
                    onSelect={v => setAnswer('mentorType', v)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-slate-900 mb-3">Preferred message tone</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {toneOptions.map(opt => (
                  <OptionCard
                    key={opt.value}
                    option={opt}
                    selected={answers.tone === opt.value}
                    onSelect={v => setAnswer('tone', v)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 z-20">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          {step > 0 ? (
            <button
              onClick={() => setStep(s => s - 1)}
              className="btn-secondary gap-2 py-3 px-5"
            >
              <ArrowLeft size={16} /> Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNext}
            disabled={!canAdvance()}
            className={`btn-primary gap-2 py-3 px-8 flex-1 sm:flex-none justify-center ${
              !canAdvance() ? 'opacity-40 cursor-not-allowed hover:translate-y-0 hover:shadow-none' : ''
            }`}
          >
            {step < steps.length - 1 ? (
              <>Continue <ArrowRight size={16} /></>
            ) : (
              <>Show My Matches <ArrowRight size={16} /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
