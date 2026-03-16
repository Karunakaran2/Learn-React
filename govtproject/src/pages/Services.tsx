import { Monitor, CreditCard, Users, HelpCircle, ChevronRight } from 'lucide-react';

export function Services() {
  const services = [
    { title: 'Seafarer Portal Registration', desc: 'New seafarers must register their accounts with valid CDC and initial employment details.', icon: <Users size={40} className="text-primary"/> },
    { title: 'Balance Enquiry & e-Passbook', desc: 'View your real-time PF balance, employer contributions, and download e-Passbooks.', icon: <Monitor size={40} className="text-secondary"/> },
    { title: 'Online Claim Settlement', desc: 'Submit withdrawal claims upon retirement or for specific advances (medical, housing, education).', icon: <CreditCard size={40} className="text-primary"/> },
    { title: 'Employer Compliance Portal', desc: 'Shipowners can upload monthly contribution returns, generate challans, and track compliance.', icon: <Users size={40} className="text-secondary"/> }
  ];

  const faqs = [
    { q: 'How long does it take for PF balance to reflect after employer deposit?', a: 'Typically, it updates within 3 to 5 working days after the successful confirmation of the payment gateway transaction.' },
    { q: 'Is it mandatory to update Aadhar to withdraw claims?', a: 'Yes, Aadhar seeding is currently mandatory for the seamless processing of online claims under the KYC norms.' },
    { q: 'What is the procedure for updating nominee details?', a: 'Nominee updates can be handled natively inside the seafarer dashboard after passing an OTP-based authentication.' }
  ];

  return (
    <div className="services-page page-enter">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-border-color">Online Services</h2>

      <div className="glass-panel p-6 md:p-8 mb-12 bg-primary text-white relative overflow-hidden">
        <div className="relative z-10 w-full md:w-2/3">
          <h3 className="text-2xl font-bold mb-4">Digital SPFO Portal</h3>
          <p className="mb-6 text-gray-300">
            Welcome to the centralized digital service gateway for seafarers and shipowners. Ensure you keep your registered mobile number active for OTP-based secure logins.
          </p>
          <button className="btn btn-secondary text-lg px-8 py-3 w-full md:w-auto">
            Login to Member Portal
          </button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <Monitor size={400}/>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-6">Available e-Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {services.map((svc, idx) => (
          <div key={idx} className="glass-panel p-6 flex items-start gap-4 hover:-translate-y-1 transition h-full">
            <div className="p-3 bg-gray-100 rounded-lg flex-shrink-0">
              {svc.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-primary">{svc.title}</h4>
              <p className="text-gray-600 mb-4">{svc.desc}</p>
              <a href="#" className="text-secondary font-bold flex items-center hover:underline">
                Access Service <ChevronRight size={16}/>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <HelpCircle className="text-secondary"/> Frequently Asked Questions
        </h3>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border-color rounded-lg p-5 hover:bg-gray-50 transition cursor-pointer">
              <h4 className="font-bold text-lg mb-2 flex items-start gap-2">
                <span className="text-primary pt-1">Q{idx + 1}.</span> {faq.q}
              </h4>
              <p className="text-gray-600 pl-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
