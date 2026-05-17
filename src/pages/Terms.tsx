import { CheckCircle, FileText, Shield, CreditCard, Users } from 'lucide-react';

const terms = [
  {
    icon: Users,
    title: 'Using PepClip',
    body: 'PepClip connects customers with mentors who can record personalized video messages. Customers are responsible for providing accurate request details and using delivered videos respectfully.',
  },
  {
    icon: Shield,
    title: 'Appropriate Requests',
    body: 'Requests must follow PepClip safety guidelines. We may decline, remove, or refund requests that include bullying, shaming, threats, discriminatory content, or harmful instructions.',
  },
  {
    icon: CreditCard,
    title: 'Payments and Refunds',
    body: 'Payment is collected when a request is submitted. If a mentor declines a request, the customer should receive a refund. Other refund decisions depend on whether the delivered video materially missed the approved request.',
  },
  {
    icon: FileText,
    title: 'Mentor Content',
    body: 'Mentors are expected to record original, age-appropriate, personalized messages that follow the customer request and PepClip guidelines. Mentors may decline requests outside their comfort zone or expertise.',
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <div className="bg-slate-900 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-4xl text-white mb-3">Terms of Service</h1>
          <p className="text-slate-400 leading-relaxed">
            The basic rules for using PepClip as a customer, recipient, or mentor.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-5">
        {terms.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={21} />
              </div>
              <div>
                <h2 className="font-display font-bold text-slate-900 mb-2">{title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
          <p className="text-sm text-green-800 flex items-start gap-3">
            <CheckCircle size={17} className="shrink-0 mt-0.5" />
            This page is a plain-language starting point for the current prototype and should be reviewed before production launch.
          </p>
        </div>
      </div>
    </div>
  );
}
