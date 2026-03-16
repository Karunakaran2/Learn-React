import { ExternalLink, AlertCircle, Phone, Mail } from 'lucide-react';

export function Grievance() {
  return (
    <div className="grievance-page page-enter">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-border-color">Grievance Redressal Mechanism</h2>

      <div className="glass-panel p-6 md:p-8 mb-8 bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle /> Centralized Public Grievance Redress And Monitoring System (CPGRAMS)
          </h3>
          <p className="mb-4 text-gray-300">
            For structured and time-bound resolution of grievances related to SPFO, all seafarers and employers are requested to lodge their complaints through the Centralized Public Grievance Redress And Monitoring System (CPGRAMS).
          </p>
          <p className="text-sm text-gray-400">
            The Directorate General of Shipping actively monitors grievances sent to the SPFO nodal officers through this central portal.
          </p>
        </div>
        <div className="w-full md:w-auto text-center">
          <a href="https://pgportal.gov.in/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-lg py-3 px-6 shadow-lg hover:shadow-xl w-full">
             Lodge Grievance <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="glass-panel p-6">
          <h3 className="text-xl font-bold mb-4 border-b pb-2 border-border-color text-primary">Steps to Submit a Grievance</h3>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            <li>Click on the "Lodge Grievance" button above to visit the CPGRAMS portal.</li>
            <li>Register yourself or login if you already have an account.</li>
            <li>Select "Ministry of Ports, Shipping and Waterways" from the Ministry/Department dropdown.</li>
            <li>Select "Main Category" related to Seamen's Provident Fund.</li>
            <li>Provide your PF Account Number / CDC Number in the description.</li>
            <li>Attach any relevant supporting documents and submit.</li>
            <li>Note down the generated registration number for future tracking.</li>
          </ol>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-xl font-bold mb-4 border-b pb-2 border-border-color text-primary">Grievance Support Contact</h3>
          <p className="mb-6 text-gray-600">
            If you face issues while lodging a grievance or require assistance relating to an already lodged grievance that has passed the deadline, contact the SPFO Nodal Officer:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded border border-border-color">
              <div className="bg-primary/10 p-2 rounded-full text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-800">Support Helpline</p>
                <p className="text-gray-600">1800-11-XXXX (Toll Free)</p>
                <p className="text-xs text-gray-400">Available Mon-Fri, 10:00 AM to 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded border border-border-color">
              <div className="bg-secondary/10 p-2 rounded-full text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-800">Email Address</p>
                <p className="text-gray-600">grievance-spfo@gov.in</p>
                <p className="text-xs text-gray-400">Please mention your CPGRAMS Reg. No. if already lodged.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
