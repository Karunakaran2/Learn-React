import { Info, Download, ExternalLink } from 'lucide-react';

export function RTI() {
  return (
    <div className="rti-page page-enter">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-border-color">Right to Information (RTI)</h2>

      <div className="glass-panel p-6 md:p-8 bg-secondary/10 border-l-4 border-secondary mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Info className="text-secondary" /> About RTI in SPFO
        </h3>
        <p className="text-gray-700">
          The Right to Information Act, 2005 empowers citizens to seek information from Public Authorities. 
          The Seamen's Provident Fund Organisation, being a statutory body under the Ministry of Ports, Shipping and Waterways, 
          fully complies with the provisions of the RTI Act to ensure transparency in our functioning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="glass-panel p-6">
          <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2 border-border-color">Public Information Officers (PIO)</h3>
          
          <div className="mb-4">
            <h4 className="font-bold text-gray-800">First Appellate Authority (FAA)</h4>
            <p className="text-sm text-gray-600">Shri. [Name Placeholder], Commissioner</p>
            <p className="text-sm text-gray-600">Email: faa-spfo@gov.in</p>
            <p className="text-sm text-gray-600">Phone: 022-2261 6940</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800">Central Public Information Officer (CPIO)</h4>
            <p className="text-sm text-gray-600">Smt. [Name Placeholder], Deputy Commissioner</p>
            <p className="text-sm text-gray-600">Email: cpio-spfo@gov.in</p>
            <p className="text-sm text-gray-600">Phone: 022-2261 6941</p>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2 border-border-color">RTI Applications & Forms</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between p-3 bg-gray-50 border border-border-color rounded hover:bg-gray-100 transition">
              <span className="font-medium text-sm text-gray-700">RTI Application Form (English)</span>
              <button className="btn btn-primary text-xs py-1 px-2 flex gap-1 items-center"><Download size={12}/> Download PDF</button>
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-50 border border-border-color rounded hover:bg-gray-100 transition">
              <span className="font-medium text-sm text-gray-700">RTI Application Form (Hindi)</span>
              <button className="btn btn-primary text-xs py-1 px-2 flex gap-1 items-center"><Download size={12}/> Download PDF</button>
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-50 border border-border-color rounded hover:bg-gray-100 transition">
              <span className="font-medium text-sm text-gray-700">Proactive Disclosure (Section 4(1)(b))</span>
              <button className="btn btn-secondary text-xs py-1 px-2 flex gap-1 items-center"><Download size={12}/> View PDF</button>
            </li>
          </ul>

          <div className="mt-6 text-center">
             <a href="https://rtionline.gov.in/" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold hover:underline flex items-center justify-center gap-1">
               Visit RTI Online Portal <ExternalLink size={16}/>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
