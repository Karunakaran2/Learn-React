import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="contact-page page-enter">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-border-color">Contact Us</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1 space-y-6">
          {/* Main Office */}
          <div className="glass-panel p-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <MapPin size={24} /> Head Office (Mumbai)
            </h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>
                Seamen's Provident Fund Organisation,<br/>
                Krupanidhi Building, 3rd Floor,<br/>
                Walchand Hirachand Marg, Ballard Estate,<br/>
                Mumbai - 400 001, Maharashtra, India.
              </p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-secondary"/> +91-22-2261 6944 / 2261 6945</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-secondary"/> spfo-mumbai@gov.in</p>
              <p className="flex items-center gap-2"><Clock size={16} className="text-secondary"/> Mon - Fri: 10:00 AM to 5:30 PM (IST)<br/>Sat & Sun Closed.</p>
            </div>
          </div>
          
          {/* Regional Office Mock */}
          <div className="glass-panel p-6 border-l-4 border-secondary">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <MapPin size={24} /> Regional Office (Kolkata)
            </h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>
                SPFO Zonal Branch,<br/>
                Marine House, Hastings,<br/>
                Kolkata - 700 022, West Bengal, India.
              </p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-secondary"/> +91-33-2223 0001</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-secondary"/> spfo-ccul@gov.in</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="glass-panel p-8 h-full">
            <h3 className="text-2xl font-bold mb-6 text-primary border-b pb-2 border-border-color">Send us an Enquiry</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Full Name *</label>
                  <input type="text" className="w-full px-4 py-2 border border-border-color rounded focus:outline-none focus:border-secondary transition bg-gray-50" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">CDC Number / PF AC. No.</label>
                  <input type="text" className="w-full px-4 py-2 border border-border-color rounded focus:outline-none focus:border-secondary transition bg-gray-50" placeholder="e.g. MUM12345" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address *</label>
                  <input type="email" className="w-full px-4 py-2 border border-border-color rounded focus:outline-none focus:border-secondary transition bg-gray-50" placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Mobile Number *</label>
                  <input type="tel" className="w-full px-4 py-2 border border-border-color rounded focus:outline-none focus:border-secondary transition bg-gray-50" placeholder="10-digit number" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Subject *</label>
                <select className="w-full px-4 py-2 border border-border-color rounded focus:outline-none focus:border-secondary transition bg-gray-50">
                  <option>General Enquiry</option>
                  <option>PF Withdrawal Assistance</option>
                  <option>KYC Update Issue</option>
                  <option>Employer Portal Issue</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Message *</label>
                <textarea rows={5} className="w-full px-4 py-2 border border-border-color rounded focus:outline-none focus:border-secondary transition bg-gray-50" placeholder="Type your detailed message here..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-secondary w-full md:w-auto text-lg py-3 px-8 shadow-md">Submit Enquiry</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Integration Placeholder */}
      <div className="glass-panel overflow-hidden w-full h-[400px] border border-border-color relative">
        <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-500">
           <MapPin size={48} className="mb-2 text-primary" />
           <p className="font-bold text-xl">Interactive Google Maps Integration</p>
           <p className="text-sm">Location: Ballard Estate, Mumbai</p>
        </div>
      </div>
    </div>
  );
}
